#!/usr/bin/env bash
#
# Membuat PDF presentasi dari deck/deck.html.
# Hasil akhir diratakan menjadi gambar per halaman supaya ringan (±5 MB).
#
# Pemakaian:
#   ./buat-pdf.sh
#   SCALE=2 QUALITY=90 ./buat-pdf.sh     # lebih tajam, file lebih besar
#   SCALE=1.25 QUALITY=78 ./buat-pdf.sh  # lebih kecil
#
set -euo pipefail

cd "$(dirname "$0")"

OUT="${OUT:-PPT Kelompok 4 Kelas 3F.pdf}"
SCALE="${SCALE:-1.5}"
QUALITY="${QUALITY:-85}"
DECK="deck/deck.html"
TMP="$(mktemp "${TMPDIR:-/tmp}/deck_render_XXXXXX.pdf")"

bersihkan() { rm -f "$TMP"; }
trap bersihkan EXIT

if [ ! -f "$DECK" ]; then
  echo "✗ Tidak menemukan $DECK" >&2
  exit 1
fi

cari_chrome() {
  local c
  for c in \
    "${CHROME:-}" \
    "$(command -v google-chrome-stable || true)" \
    "$(command -v google-chrome || true)" \
    "$(command -v chromium || true)" \
    "$(command -v chromium-browser || true)"
  do
    if [ -n "$c" ] && [ -x "$c" ]; then
      printf '%s\n' "$c"
      return 0
    fi
  done

  for c in "$HOME"/.cache/ms-playwright/chromium-*/chrome-linux*/chrome; do
    if [ -x "$c" ]; then
      printf '%s\n' "$c"
      return 0
    fi
  done

  return 1
}

if ! CHROME_BIN="$(cari_chrome)"; then
  echo "✗ Chromium/Chrome tidak ditemukan." >&2
  echo "  Set manual, misalnya: CHROME=/usr/bin/chromium ./buat-pdf.sh" >&2
  exit 1
fi

if ! python3 - <<'PY' >/dev/null 2>&1
try:
    import pymupdf  # noqa: F401
except ImportError:
    import fitz  # noqa: F401
PY
then
  echo "✗ PyMuPDF belum terpasang. Jalankan:" >&2
  echo "  pip install pymupdf" >&2
  exit 1
fi

echo "→ Render HTML dengan: $CHROME_BIN"
"$CHROME_BIN" \
  --headless=new \
  --no-sandbox \
  --disable-gpu \
  --hide-scrollbars \
  --virtual-time-budget=20000 \
  --no-pdf-header-footer \
  --print-to-pdf="$TMP" \
  "file://$PWD/$DECK" >/dev/null 2>&1

if [ ! -s "$TMP" ]; then
  echo "✗ Gagal merender HTML ke PDF." >&2
  exit 1
fi

echo "→ Ratakan jadi gambar (skala $SCALE, JPEG q$QUALITY)"
python3 - "$TMP" "$OUT" "$SCALE" "$QUALITY" <<'PY'
import os
import sys

try:
    import pymupdf
except ImportError:
    import fitz as pymupdf

src_path, out_path, scale, quality = sys.argv[1], sys.argv[2], float(sys.argv[3]), int(sys.argv[4])

src = pymupdf.open(src_path)
out = pymupdf.open()

for page in src:
    pix = page.get_pixmap(matrix=pymupdf.Matrix(scale, scale), alpha=False)
    halaman = out.new_page(width=1440, height=810)
    halaman.insert_image(halaman.rect, stream=pix.tobytes("jpeg", jpg_quality=quality))

out.set_metadata(
    {
        "title": "Pemasaran Digital + Website — Kedai Ibu Kost",
        "author": "Kelompok 4 Kelas 3F",
        "subject": "Tugas pemasaran digital Kedai Ibu Kost",
    }
)
out.save(out_path, garbage=4, deflate=True)
out.close()

print(f"  {len(src)} halaman · {os.path.getsize(out_path) / 1e6:.2f} MB")
PY

echo "✓ Selesai: $OUT"
