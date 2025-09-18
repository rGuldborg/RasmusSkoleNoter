## a. Hvad er Docker?

- Docker er en **platform til containerisering**.
    
- Bruges til at pakke applikationer med alle deres afhængigheder, så de kan køre ens på forskellige miljøer.
    
- Fordele: Portabilitet, isolering, hurtig deployment, konsistens mellem dev/production.
    

---

## b. Hvad er en Docker Container?

- En container er en **kørende instans af en Docker Image**.
    
- Indeholder alt, hvad applikationen behøver: kode, runtime, systembiblioteker.
    
- Isoleret fra host-systemet, men kan dele kernens ressourcer.
    

---

## c. Hvad er en Docker Image?

- En image er en **read-only skabelon**, som bruges til at oprette containere.
    
- Indeholder applikation, afhængigheder og konfiguration.
    
- Kan versioneres og deles via Docker Hub.
    

---

## d. Demonstrere en Docker container lokalt

- Eksempel: Kør en Nginx container lokalt:
    

```bash
docker run -d -p 8080:80 nginx
```


- Forklaring:
    
    - `-d` = detached (baggrund)
        
    - `-p 8080:80` = map port 80 i container til 8080 på host
        

---

## e. Vigtige Docker-kommandoer

|Handling|Kommando|
|---|---|
|Build image|`docker build -t <image-name> .`|
|Opret container|`docker run -d --name <container-name> <image-name>`|
|Stop container|`docker stop <container-name>`|
|Start container|`docker start <container-name>`|
|Liste alle images|`docker images`|
|Liste alle containere|`docker ps -a`|
|Slet image|`docker rmi <image-name>`|
|Slet container|`docker rm <container-name>`|

---

## f. Håndtering af porte

- Docker-mapping af porte: 
-
```bash
-p <host-port>:<container-port>
```

    
- Eksempel:
    

```bash
docker run -d -p 3306:3306 mysql
```


- Host kan nu tilgå MySQL på port 3306, container isoleres stadig internt.
    

---

## g. Tilgå MySQL i container

1. Start MySQL container:
    

```bash
docker run -d -p 3306:3306 --name my-mysql -e MYSQL_ROOT_PASSWORD=root mysql:latest
```


2. Tilgå container fra host:
    

```bash
mysql -h 127.0.0.1 -P 3306 -u root -p
```


3. Eksempler på SQL-kommandoer:
    

```sql
CREATE DATABASE testdb;
USE testdb;
CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(50));
INSERT INTO users VALUES (1, 'Alice'), (2, 'Bob');
SELECT * FROM users;
```

