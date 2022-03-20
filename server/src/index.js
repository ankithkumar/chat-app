var express = require('express')
var cors = require('cors')
var app = express();
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const db_conn = require('./db_conn/index');
const resMsg = require('./const');
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
const port = 80;
// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;
let session = null;

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use(cors(corsOptions));

app.use(sessions({
  secret: "thisissecretkeyforchatapp",
  saveUninitialized:true,
  cookie: { maxAge: oneDay },
  resave: false
}));

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// cookie parser middleware
app.use(cookieParser());

app.get('/', function(req, res, next) {
  res.json({ message: "Welcome to chat app." });
});

function isSessionValid(req, res) {
  session=req.session;
  if (session.email) {
    return true;
  }
  res.send({
    msg: resMsg.unAuthorized
  })
  return false;
}
app.get('/checkUserName', async function (req, res, next) {
  if (!isSessionValid(req, res)) {
    return;
  }
  const isUserNameDuplicate = await db_conn.user.isUserNameDuplicate({name: req.query.username});
  if (isUserNameDuplicate) {
    res.send({
      msg: resMsg.duplicate_user
    });
  } else {
    res.send({
      msg: resMsg.success
    });
  }
})

app.post('/login', async function (req, res, next) {
  session=req.session;
  if (session.email) {
    res.send({
      msg: resMsg.success
    });
    return;
  }
  const user = {
    name: req.body.name,
    email: req.body.email,
    pwd: req.body.pwd
  }
  const isUserPresent = await db_conn.user.isUserPresent(user);
  if (isUserPresent) {
    session.email = req.body.email;
    res.send({
      msg: resMsg.success
    });
  } else {
    res.send({
      msg: resMsg.no_user
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
      msg: resMsg.user_exists
    });
    return;
  }
  await db_conn.user.addUser(user);
  res.send({
    msg: resMsg.success
  });
})

app.get('/userlist', async function (req, res, next) {
  if (!isSessionValid(req, res)) {
    return;
  }
  const userList = await db_conn.user.getUserList(req.query.search);
  res.send({
    list: userList
  });
});

app.get('/chatuserlist', async function (req, res, next) {
  if (!isSessionValid(req, res)) {
    return;
  }
  const userList = await db_conn.user.getChatUserList(req.query.search);
  res.send({
    list: userList
  });
});

app.post('/sendmessage', async function(req, res, next) {
  if (!isSessionValid(req, res)) {
    return;
  }
  const chat = {
    sender: req.body.sender,
    receiver: req.body.receiver,
    msg: req.body.msg,
    ts: Date.now()
  }
  await db_conn.chat.sendMessage(chat);
  res.send({
    msg: 'success'
  })
});
app.get('/getchats', async function (req, res, next) {
  if (!isSessionValid(req, res)) {
    return;
  }
  const chats = await db_conn.chat.getMessageBetWeen(req.query.sender, req.query.receiver);
  res.send({
    chats
  });
});

app.get('/logout',(req,res) => {
  req.session.destroy();
  res.send({
    msg: resMsg.success
  });
});

app.listen(port, function () {
  console.log('CORS-enabled web server listening on port ', port);
})