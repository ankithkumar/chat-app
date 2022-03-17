const connection = require('./connection');

async function addUser(userObj) {
    await connection.connect();
    const client = connection.getMongoClient();
    const res = await client.db("chatApp").collection("user").insertOne(userObj);
    await connection.close();
    console.log('added user ', res);
}
module.exports = {
    addUser
};