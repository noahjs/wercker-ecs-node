const express = require('express');
const app = express();

app.get('/', function (req, res) {
  console.log('Request')
  let deployment = process.env.DEPLOYMENT || 'no-deployment';
  return res.status(200).json({deployment});
});

let port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});