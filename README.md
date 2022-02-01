# apirest-tree-list

initial project with docker, express and mongo

install docker and run next commands:

```
docker network create someNameNetwork

docker network connect someNetwork nodejs-api

docker network connect someNetwork mongo

docker-compose build 
```

## url api
[http://localhost:8080/api/tasks](http://localhost:8080/api/tasks)

## url swagger
[http://localhost:3081/api-docs/#/](http://localhost:3081/api-docs/#/)