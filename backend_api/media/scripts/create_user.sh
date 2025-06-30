#!/bin/bash
# Backup script

SOURCE_DIR="/home/user/projects"
BACKUP_DIR="/home/user/backups"
DATE=$(date +%Y-%m-%d)

mkdir -p "$BACKUP_DIR/$DATE"
cp -r "$SOURCE_DIR" "$BACKUP_DIR/$DATE"

echo "Backup completed: $BACKUP_DIR/$DATE"
