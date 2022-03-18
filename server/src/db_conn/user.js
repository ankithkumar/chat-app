const connection = require('./connection');

async function addUser(userObj) {
    await connection.connect();
    const client = connection.getMongoClient();
    const res = await client.db("chatApp").collection("user").insertOne(userObj);
    await connection.close();
    console.log('added user ', res);
}

async function isUserPresent(userObj) {
    await connection.connect();
    const client = connection.getMongoClient();
    const res = await client.db("chatApp").collection("user").find({email: userObj.email, pwd: userObj.pwd}).toArray();
    console.log('length ', res.length);
    await connection.close();
    return res.length !== 0;
}

module.exports = {
    addUser,
    isUserPresent
};