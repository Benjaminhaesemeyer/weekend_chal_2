var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var port = 5000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/*", function(req, res){
  var file = req.params[0] || "views/index.html";
  res.sendFile(path.join(__dirname, "public", file));
});

app.post('/outcome', function(req,res){
  console.log('in post route');
  console.log('req.body in post = ', req.body);
  calcResults(req.body);
  res.sendStatus(200);
});
// created a calculator function
calcResults = function (calcButton){
  console.log('calc results working');

  var x = Number(calcButton.x);
  var y = Number(calcButton.y);
  var operator = calcButton.type;

//declare answer variable
  var answer;
//switch statement for choosing operator
  switch (operator) {
    case 'add':
      answer = x + y;
      break;
    case 'subtract':
      answer = x - y;
      break;
    case 'multiply':
      answer = x * y;
      break;
    case 'divide':
      answer = x / y;
      break;
    default:
      console.log('error');
      answer = 'operator error';
  }
  return answer;

};

app.listen(port, function() {
  console.log('listening on port', port);
});
