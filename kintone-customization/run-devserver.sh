#!bin/bash

# Run devserver
count=`ps -ef | grep server.py | grep -v grep | wc -l`
if [ $count = 0 ]; then
    python .devcontainer/devserver/server.py &
else
    echo "[log] Dev server already running"
fi