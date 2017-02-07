#!/usr/bin/env bash
set -e

export NODE_ENV=production
export PATH=$PATH:`npm bin`

./tasks/build.sh --no-lint

rm -fdr dist
mkdir dist
rsync -a --exclude dist --exclude node_modules --exclude tasks --exclude '*.marko.js' . dist
babel app.js -d dist 
babel controllers -d dist/controllers
babel routes -d dist/routes
babel client -d dist/client
babel lib -d dist/lib
cd dist 
ln -s ../node_modules 

cd ..
GITREV=`git rev-parse HEAD`
GITREV=${GITREV:0:8}
sed -i "s/git-rev/$GITREV/g" dist/config/default.json
