var express = require('express')
var cors = require('cors')
var app = express();
const db_conn = require('./db_conn/index');
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

db_conn.user.addUser({
  email: 'abc@123',
  pwd: 'abc@1234'
});
db_conn.chat.getMessageBetWeen();
// app.get('/', cors(corsOptions), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for all'})
// })

// app.listen(80, function () {
//   console.log('CORS-enabled web server listening on port 80')
// })