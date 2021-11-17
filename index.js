const express = require('express')
const app = express()
const connection = require('./connection/connection.js');

app.use(express.json());
 
app.get('/', async function (req, res) {
  res.send(await connection.getEx());
})
 
let port = process.env.PORT || 5000;

app.listen(port,()=>{
  console.log('rodando na porta:');
  console.log(port);
});