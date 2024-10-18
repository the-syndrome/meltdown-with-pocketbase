#!/bin/sh

case $(uname -m) in
  aarch64|arm64 ) ARCH=arm64 ;;
  x86_64|amd64 ) ARCH=amd64 ;;
  armv7* ) ARCH=arm ;;
  * ) error " $(text 2) "
esac

if [ ! -x ./pocketbase ]; then
  ZIP=pocketbase_${POCKETBASE_VERSION}_linux_${ARCH}.zip
  wget "https://github.com/pocketbase/pocketbase/releases/download/v${POCKETBASE_VERSION}/$ZIP"
  unzip $ZIP
  rm $ZIP
  # ./pocketbase admin create "$POCKETBASE_ADMIN_EMAIL" "$POCKETBASE_ADMIN_PASSWORD"
  ./pocketbase migrate up
fi

./pocketbase serve --http 0.0.0.0:8090
