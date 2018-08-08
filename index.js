const express = require('express');

const port = 8080;
const app = express();

app.use('/', (req, res) =>{
  res.send('My first Openshift app!!!!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
