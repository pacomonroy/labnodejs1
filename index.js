var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/hello/:nombre',function(req,res){
  res.send('Hello2'+ req.params.nombre)
});

app.listen(2500, function () {
  console.log('Listening on port 2500!');
});
