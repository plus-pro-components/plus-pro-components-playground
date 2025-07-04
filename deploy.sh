#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd ./dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/plus-pro-components/plus-pro-components-playground.git master:gh-pages

rsync -av --exclude=".*" ./ root@47.109.84.50:/root/plus-pro-components-playground

cd -
