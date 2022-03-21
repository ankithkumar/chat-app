const { api_fail } = require('../const.js');
const connection = require('./connection.js');

async function sendMessage(msgObj) {
    try {
        await connection.connect();
        const client = connection.getMongoClient();
        const res = await client.db("chatApp").collection("chat").insertOne(msgObj);
        await connection.close();
        console.log('send Msg ', res);
        return res;
    } catch(e) {
        return api_fail;
    }
}

async function getMessageBetWeen(sender, receiver) {
    try {
        await connection.connect();
        const client = connection.getMongoClient();
        const db = client.db("chatApp").collection("chat");
        const res = await db.find({ $or: [{ sender: sender, receiver: receiver }, { sender: receiver, receiver: sender }]})
            .sort({ timestamp: -1 }).toArray();
        await connection.close();
        return res;
    } catch(e) {
        return api_fail;
    }
}

module.exports = {
    sendMessage,
    getMessageBetWeen
}