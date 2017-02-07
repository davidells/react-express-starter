#!/usr/bin/env bash
set -e
PATH=$PATH:`npm bin`

if [ x"$NODE_ENV" = x"production" ]; then
    babel-node ./bin/www --presets es2015,react
else
    babel-watch ./bin/www --presets es2015,react
fi
