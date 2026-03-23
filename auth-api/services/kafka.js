const { Kafka } = require("kafkajs")

const kafka = new Kafka({
 clientId: "auth-api",
 brokers: ["localhost:9092"]
})

const producer = kafka.producer()

const connectProducer = async () => {
 await producer.connect()
}

connectProducer()

module.exports = producer