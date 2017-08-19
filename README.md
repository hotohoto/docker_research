# Docker Research
This project demonstrates how to setup distributed `Node.js` service with docker

## How to run

### Prerequisite

* Install docker
* Install VirtualBox for `docker-machine` test

### Docker (without docker-compose)

1. Build docker image
```shell
docker build -t swarm_test:latest .
```
2. Run docker image
```shell
docker run -d --name swarm_test_container -p 3210:3000 swarm_test:latest
```

3. Check out the running container
```shell
docker exec -it swarm_test /bin/bash
```

4. Stop and remove the running container
```shell
docker rm -f swarm_test
```

### Docker Compose

Please refer to `docker-compose.yml`

1. Build and Start
```shell
docker-compose up -d
```

2. Stop
```shell
docker-compose down
```

### Docker Machine
1. Create a docker machine
```shell
docker-machine help
docker-machine create --driver=virtualbox node1
```

2. List docker machines
```shell
docker-machine ls
```

3. Log-in a docker machine
```shell
docker-machine ssh node1
```

3. Check how to set the current docker machine
```shell
docker-machine env node1
```

4. Set the current docker machine and check the images and containers there
```shell
eval $(docker-machine env node1)
docker images
docker ps
```

5. Reset the current docker machine to the localhost
```shell
eval $(docker-machine env -u)
```

6. Stop the docker machine
```shell
docker-machine stop node1
```

### Docker Swarm

**(TODO)**

1. Log-in `node1` and initialize the manager docker swarm
```shell
eval $(docker-machine env node1)
docker swarm init --advertise-addr 192.168.99.100
docker node ls
```

2. Log-in `node2` and join the docker swarm
```shell
eval $(docker-machine env node2)
docker swarm join --token SWMTKN-1-5nbmidlk9e8ev52dhd4se1k0tpye0nmmrqpwam2mdbpq3vc68p-7ticp29w9fviu11jyp7hehh6k 192.168.99.100:2377
```

3. Build and run docker containers on the docker swarm
```shell
eval $(docker-machine env node1)
docker build -t swarm_test:latest .
docker service create --name website --publish 3333:3000 swarm_test:latest

```

## References

* [Docker Compose in 12 Minutes](https://youtu.be/Qw9zlE3t8Ko)
* [Use Docker-machine to Create Docker Servers](https://youtu.be/OWhhOQAiGt0)
* [Docker Swarm Mode Walkthrough](https://youtu.be/KC4Ad1DS8xU)
