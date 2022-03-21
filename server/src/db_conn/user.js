const connection = require('./connection');

async function addUser(userObj) {
    try {
        await connection.connect();
        const client = connection.getMongoClient();
        const res = await client.db("chatApp").collection("user").insertOne(userObj);
        await connection.close();
        console.log('added user ', res);
    } catch(e) {
        return api_fail;
    }
}

async function isUserNameDuplicate(userObj) {
    try {
        await connection.connect();
        const client = connection.getMongoClient();
        const res = await client.db("chatApp").collection("user").find({name: userObj.name}).toArray();
        console.log('length ', res);
        await connection.close();
        return res.length !== 0;
    } catch(e) {
        return api_fail;
    }
}

async function getUser(userObj) {
    try {
        await connection.connect();
        const client = connection.getMongoClient();
        const res = await client.db("chatApp").collection("user").find({email: userObj.email, pwd: userObj.pwd}).toArray();
        console.log('length ', res.length);
        await connection.close();
        return res;
    } catch(e) {
        return api_fail;
    }
}

function filterBySearchKey(res, searchKey) {
    return res.reduce((list, user) => {
        if (user.name && user.name.includes(searchKey)) {
            list.push(user.name)
        }
        return list;
    }, []);
}
async function getUserList(searchKey) {
    try {
        await connection.connect();
        const client = connection.getMongoClient();
        const res = await client.db("chatApp").collection("user").find({}).sort({"name":1}).toArray();
        await connection.close();
        if (!searchKey) {
            const userList = [];
            res.forEach(user => userList.push(user.name));
            return userList;
        }
        return filterBySearchKey(res, searchKey);
    } catch(e) {
        return api_fail;
    }
}

async function getChatUserList(username, searchKey) {
    await connection.connect();
    const client = connection.getMongoClient();
}

module.exports = {
    addUser,
    getUser,
    isUserNameDuplicate,
    getUserList
};