docker ps - vejo o que está rodando

# ---- MYSQL
docker run \
    --name mysql \
    -e MYSQL_DATABASE=provisor_goodyearblog \
    -e MYSQL_ROOT_PASSWORD=denisales \
    -e MYSQL_USER=denis \
    -e MYSQL_PASSWORD=denis \
    -p 3306:3306 \
    -d \
    mysql

docker run \
    --name adminer-mysql \
    -p 8080:8080 \
    --link mysql:mysql \
    -d \
    adminer


# mysql -u root -p 
# ALTER USER 'root'@'localhost' IDENTIFIED BY 'denisales!';
# ALTER USER 'denis' IDENTIFIED WITH mysql_native_password BY 'denis'



# ----- POSTGRES
docker run \
    --name postgres \
    -e POSTGRES_USER=denisales \
    -e POSTGRES_PASSWORD=denisales \
    -e POSTGRES_DB=herois \
    -p 5432:5432 \
    -d \
    postgres

docker exec -it postgres /bin/bash - entrar no container rodar comando lá dentro

## criando interface
docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer

# ----- MONGODB

docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=admin \
    -d \
    mongo:4

## criando interface
docker run \
    --name mongoclient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient

docker exec -it mongodb \
    mongo --host localhost -u admin -p admin --authenticationDatabase admin \
    --eval "db.getSiblingDB('herois').createUser({user:'denisales', pwd: 'denisales', roles: [{role: 'readWrite', db: 'herois'}] } )"
