@echo off
mkdir backup_vite
move src backup_vite\src
move public backup_vite\public
move *.json backup_vite\
move *.js backup_vite\
move *.html backup_vite\
move *.toml backup_vite\
move dist backup_vite\dist
rmdir /s /q node_modules
dir > dir_output.txt
