* Start Zookeper Container and expose PORT 2181.
    `docker run -p 2181:2181 zookeeper`

* Start Kafka Container, expose PORT 9092 and setup ENV variables.
```
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=192.168.29.83:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://192.168.29.83:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```


Run 
1. `npx ts-node admin.ts` -> to setup the admin
2. 