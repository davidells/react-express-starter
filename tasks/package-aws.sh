#!/usr/bin/env bash
set -e

export NODE_ENV=production
export PATH=$PATH:`npm bin`

./tasks/dist.sh
cd dist 
zip -r ../dist.zip --exclude='*node_modules*' .
