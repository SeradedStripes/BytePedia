#!/bin/bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LANGS_DIR="$ROOT_DIR/langs"
OUT_FILE="$LANGS_DIR/index.json"
TMP_FILE="$OUT_FILE.tmp"

touch "$TMP_FILE"

escape_json() {
    printf '%s' "$1" | sed 's/\\/\\\\/g; s/"/\\"/g'
}

{
    printf '[\n'

    first=1
    for dir in "$LANGS_DIR"/*/; do
        [ -d "$dir" ] || continue

        slug="$(basename "$dir")"
        index_file="$dir/index.html"

        if [ ! -f "$index_file" ]; then
            continue
        fi

        escaped_slug="$(escape_json "$slug")"

        if [ "$first" -eq 0 ]; then
            printf ',\n'
        fi

        printf '  "%s"' "$escaped_slug"
        first=0
    done

    printf '\n]\n'
} > "$TMP_FILE"

mv "$TMP_FILE" "$OUT_FILE"
echo "Wrote $OUT_FILE"
