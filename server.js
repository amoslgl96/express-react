const express = require('express');


const app = express();

app.get('/sayHello', function(req, res){
  res.send('Hello from the back-end.');
});

app.listen(3000);
