#!/usr/bin/env bash
set -e

cd dist/
forever stop ./bin/www
cd ../
git pull
npm install
./tasks/dist.sh
cd dist/
rm ~/.forever/*.log
NODE_ENV=production forever start ./bin/www
