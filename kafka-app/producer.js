const { kafka } = require('./client');

const readline = require('readline');

/**
 * Task of producer is to publish messages to the topic "rider-updates". As we are not mentioning any partition here while 
 * publishing the msg, kafka zookeper send the message to all the partitions
 */

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


async function init() {

    const producer = kafka.producer();
    await producer.connect();

    console.log("Producer connected successfully");

    rl.setPrompt('> ');
    rl.prompt();

    rl.on("line", async (input) => {
        const [riderName, location] = input.split(" ");
        await producer.send({ 
            "topic": "rider-updates", 
            "messages": [
                {
                    partition: location.toLowerCase() == "north" ? 0 : 1,
                    key: "location-update", 
                    value: JSON.stringify({ riderName, location})
                }
            ]
        })
    }).on("close", async () => {
        await producer.disconnect();
    })


}

init();