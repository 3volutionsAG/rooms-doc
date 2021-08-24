#!/bin/sh

# init the app dependencies
git submodule update --init --recursive
npm install
./home/dev/.vim/pack/install.sh "/home/dev"

# Change ownership of all directories and files in the mounted volume, i.e.
# what has been mapped from the host:
chown -R dev:dev /app

# Finally invoke what has been specified as CMD in Dockerfile or command in docker-compose:
"$@"
