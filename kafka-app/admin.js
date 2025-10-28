const { kafka } = require('./client');


/**
 * Task of admin is to create topics (rider-updates) with reqd no of partitions, here 2
 */

async function init() {
    const admin = kafka.admin();
    admin.connect();
    console.log("admin connection successful");

    await admin.createTopics({
        topics: [{
            topic: "rider-updates",
            numPartitions: 2
        }],
    })
    console.log("rider-updates topic created successfully"); 

    await admin.disconnect();
    console.log("Admin disconnected"); 
}

init();
