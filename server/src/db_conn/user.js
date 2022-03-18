const connection = require('./connection');

async function addUser(userObj) {
    await connection.connect();
    const client = connection.getMongoClient();
    const res = await client.db("chatApp").collection("user").insertOne(userObj);
    await connection.close();
    console.log('added user ', res);
}

async function isUserNameDuplicate(userObj) {
    await connection.connect();
    const client = connection.getMongoClient();
    const res = await client.db("chatApp").collection("user").find(userObj).toArray();
    console.log('length ', res);
    await connection.close();
    return res.length !== 0;
}

async function isUserPresent(userObj) {
    await connection.connect();
    const client = connection.getMongoClient();
    const res = await client.db("chatApp").collection("user").find(userObj).toArray();
    console.log('length ', res.length);
    await connection.close();
    return res.length !== 0;
}

async function getUserList() {
    await connection.connect();
    const client = connection.getMongoClient();
    const res = await client.db("chatApp").collection("user").find({}).sort({"name":1}).toArray();
    const userList = [];
    res.forEach(user => userList.push(user.name));
    console.log(userList);
    await connection.close();
    return userList;
}
module.exports = {
    addUser,
    isUserPresent,
    isUserNameDuplicate,
    getUserList
};