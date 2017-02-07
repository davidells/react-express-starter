#!/usr/bin/env bash
set -e
PATH=$PATH:`npm bin`

echo "Linting the codebase with eslint (with autofix)"
eslint . --fix $@
