#!/usr/bin/env bash
set -e

export NODE_ENV=production
export PATH=$PATH:`npm bin`

./tasks/dist.sh

GITREV=`git rev-parse HEAD`
GITREV=${GITREV:0:8}

cd dist 
zip -r ../dist-${GITREV}.zip --exclude='*node_modules*' .
