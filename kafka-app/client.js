const { Kafka } = require('kafkajs');

exports.kafka = new Kafka({
    brokers: ["192.168.29.83:9092"],
    clientId: "zomato-app"
});

