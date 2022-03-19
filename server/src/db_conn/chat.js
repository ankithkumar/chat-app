const connection = require('./connection.js');

async function sendMessage(msgObj) {
    await connection.connect();
    const client = connection.getMongoClient();
    const res = await client.db("chatApp").collection("chat").insertOne(msgObj);
    await connection.close();
    console.log('send Msg ', res);
    return res;
}

async function getMessageBetWeen(sender, receiver) {
    await connection.connect();
    const client = connection.getMongoClient();
    const db = client.db("chatApp").collection("chat");
    const res = await db.find({ $or: [{ sender: sender, receiver: receiver }, { sender: receiver, receiver: sender }]})
        .sort({ timestamp: -1 }).toArray();
    await connection.close();
    return res;
}

module.exports = {
    sendMessage,
    getMessageBetWeen
}