#!/bin/bash
bash ./build-langs-index.sh
python3 -m http.server 8000 -d ./
exit