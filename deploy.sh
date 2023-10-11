#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd ./dist

# rsync -av --exclude=".*" ./  root@39.103.160.178:/root/plus-pro-components-playground
cd -
