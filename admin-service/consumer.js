const { Kafka } = require("kafkajs");

const kafka = new Kafka({
  clientId: "admin-service",
  brokers: ["localhost:9092"]
});

const consumer = kafka.consumer({
  groupId: "admin-group"
});

async function start() {

  await consumer.connect();

  await consumer.subscribe({
    topic: "login-events"
  });

  await consumer.run({

    eachMessage: async ({ message }) => {

      console.log(
        "Admin received login:",
        message.value.toString()
      );
    }
  });
}

module.exports = start;