var express = require('express');
var app = express();
var request = require('request');
var cors = require('cors');

app.use(cors());

app.get('/getActiveServices', function (req, res) {
  request('https://bpk-postamat.privatbank.ua/api/getActiveServices', function (error, response, body){
    res.send(body);
  })
});

// app.get('/getBonusPlusPartners', function (req, res) {
//   request('https://bpk-postamat.privatbank.ua/api/getActiveServices', function (error, response, body){
//     res.send(body);
//   })
// });

app.listen(3000);
