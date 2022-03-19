var express = require('express')
var cors = require('cors')
var app = express();
const db_conn = require('./db_conn/index');
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


app.get('/', function(req, res, next) {
  res.json({ message: "Welcome to chat app." });
});

app.get('/checkUserName', async function (req, res, next) {
  console.log(req.query.username);
  const isUserNameDuplicate = await db_conn.user.isUserNameDuplicate({name: req.query.username});
  if (isUserNameDuplicate) {
    res.send({
      msg: 'duplicate user'
    });
  } else {
    res.sendStatus(200);
  }
})

app.post('/login', async function (req, res, next) {
  console.log(req.body);
  const user = {
    name: req.body.name,
    email: req.body.email,
    pwd: req.body.pwd
  }
  const isUserPresent = await db_conn.user.isUserPresent(user);
  if (isUserPresent) {
    res.sendStatus(200);
  } else {
    res.send({
      msg: 'no user'
    })
  }
})

app.post('/signup', async function (req, res, next) {
  const user = {
    name: req.body.name,
    email: req.body.email,
    pwd: req.body.pwd
  }
  const isUserPresent = await db_conn.user.isUserPresent(user);
  if (isUserPresent) {
    res.json({
      msg: 'user already exists'
    });
    return;
  }
  await db_conn.user.addUser(user);
  res.sendStatus(200);
})

app.get('/userlist', async function (req, res, next) {
  const userList = await db_conn.user.getUserList(req.query.search);
  res.send({
    list: userList
  });
});

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})