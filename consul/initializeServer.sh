#!/bin/sh
set -uex;
nohup consul agent -dev -ui -client 0.0.0.0 &

let "timeout = $(date +%s) + 15";
while ! curl -f -s http://localhost:8500/v1/status/leader | grep "[0-9]:[0-9]"; do
	if [ $(date +%s) -gt $timeout ]; then 
		echo "timeout"; 
		exit 1; 
	fi;
    sleep 1;
done; 

echo 'Initialize kv store with config values.'
consul kv import @./config/values.json;

while true;
do
	sleep 10000;
done;