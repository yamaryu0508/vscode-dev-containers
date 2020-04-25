#!bin/zsh

# Set up mkcert
# Ref: https://github.com/FiloSottile/mkcert
MKCERT_BASE_URL="https://github.com/FiloSottile/mkcert/releases/download"
MKCERT_VERSIN="v1.4.1"
MKCERT_LINUX_BIN="mkcert-$MKCERT_VERSIN-linux-amd64"
MKCERT_MAC_BIN="mkcert-$MKCERT_VERSIN-darwin-amd64"
MKCERT_WIN_BIN="mkcert-$MKCERT_VERSIN-windows-amd64.exe"

MKCERT_DIR=".devcontainer/devserver/mkcert/"

if [ ! -e $MKCERT_DIR ]; then
  mkdir -p $MKCERT_DIR
  cd $MKCERT_DIR
  wget $MKCERT_BASE_URL/$MKCERT_VERSIN/$MKCERT_LINUX_BIN
  chmod +x $MKCERT_LINUX_BIN

  wget $MKCERT_BASE_URL/$MKCERT_VERSIN/$MKCERT_MAC_BIN
  chmod +x $MKCERT_MAC_BIN

  wget $MKCERT_BASE_URL/$MKCERT_VERSIN/$MKCERT_WIN_BIN
  chmod +x $MKCERT_WIN_BIN

  ./$MKCERT_LINUX_BIN -install
  ./$MKCERT_LINUX_BIN localhost 127.0.0.1 ::1

  mkdir ./.CAROOT
  cp -r /home/developer/.local/share/mkcert/* ./.CAROOT
  cd ../../../
fi

# Install packages
yarn install