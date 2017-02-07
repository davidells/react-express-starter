#!/usr/bin/env bash
set -e
PATH=$PATH:`npm bin`

echo "Building CSS files with node-sass"
node-sass --include-path client/styles client/styles/index.scss public/css/index.css $@
