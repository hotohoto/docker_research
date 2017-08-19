#!/bin/bash

# Restart docker container manually without docker-compose

docker rm -f swarm_test_container
docker build -t swarm_test:latest .
docker run -d --name swarm_test_container -p 3210:3000 swarm_test:latest
