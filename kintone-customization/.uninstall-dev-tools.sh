#!bin/bash

# Remove mkcert
MKCERT_BASE_URL="https://github.com/FiloSottile/mkcert/releases/download"
MKCERT_VERSIN="v1.4.1"
MKCERT_LINUX_BIN="mkcert-$MKCERT_VERSIN-linux-amd64"
MKCERT_MAC_BIN="mkcert-$MKCERT_VERSIN-darwin-amd64"
MKCERT_WIN_BIN="mkcert-$MKCERT_VERSIN-windows-amd64.exe"

MKCERT_DIR=".devcontainer/devserver/mkcert/"

if [ -e $MKCERT_DIR ]; then
  rm -rf $MKCERT_DIR
fi