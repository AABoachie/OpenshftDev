const express = require('express');

const port = 3000;
const app = express();

app.use('/', (req, res) =>{
  res.send('Openshift app');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
