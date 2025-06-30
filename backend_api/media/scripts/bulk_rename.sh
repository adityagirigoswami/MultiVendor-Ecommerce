#!/bin/bash
# Rename .txt files to .bak.txt in current folder

for file in *.txt; do
  mv "$file" "${file%.txt}.bak.txt"
done
echo "Renaming done!"
