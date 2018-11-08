const express = require('express');
const app = express();
const nameGenerator = require('./namer.js');


app.get('/name', function(req, res) {
  console.log(req.query);
  let reps = req.query.count;
  let num = req.query.number;
  let name = nameGenerator(num);
  // let name = function (reps, num) {
  //   for (let i = 0; i < reps; i++){
  //     nameGenerator(num);
  //   }
  // }

  res.send(name)
});




app.listen(process.env.PORT || 3000, function(){
    console.log("Server has started!!");
});
