#!/usr/bin/env bash
set -e
PATH=$PATH:`npm bin`

echo "Building client side JS files with webpack"
webpack --progress --colors $@
