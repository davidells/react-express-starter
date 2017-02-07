#!/usr/bin/env bash
set -e
PATH=$PATH:`npm bin`

[ x"$1" != x"--no-lint" ] && ./tasks/lint.sh
./tasks/build-css.sh
./tasks/build-client.sh
