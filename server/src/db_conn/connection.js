
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://chatbotAdmin:ChatAdmin123@cluster0.f9nr6.mongodb.net/Cluster0?retryWrites=true&w=majority";
let client;


function getMongoClient() {
    if (!client) {
        client = new MongoClient(uri)
    }
    return client;
}

async function connect() {
    client = getMongoClient();
    await client.connect()
}

async function close() {
    await client.close();
}

module.exports = {
    getMongoClient,
    connect,
    close
}