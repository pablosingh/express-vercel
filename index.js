const express = require('express')
const app = express()
const routes = require('./src/routes/index.js');
const port = process.env.PORT || 3000;
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World! 2'));

app.use( '/', routes );
app.get('/get', (req,res)=> res.json({ msg: "ok" }));
app.get('/get2', (req,res)=> res.send('get 2'));

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})