const connection = require('./connection.js');

async function sendMessage(msgObj) {
    await connection.connect();
    const client = connection.getMongoClient();
    console.log(`New listing created with the following id: ${result.insertedId}`);
    const res = await client.db("chatApp").collection("chat").insertOne(msgObj);
    await connection.close();
    console.log('send Msg ', res);
    return res;
}

async function getMessageBetWeen(to, from) {
    await connection.connect();
    const client = connection.getMongoClient();
    const res = await client.db("chatApp").collection("chat").find().toArray();
    res.forEach(chatObj => console.log(chatObj));
    await connection.close();
}

module.exports = {
    sendMessage,
    getMessageBetWeen
}