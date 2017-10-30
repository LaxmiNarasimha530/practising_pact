#!/bin/bash

yarn install && \
  node_modules/.bin/webpack-dev-server --host 0 --port 3000
