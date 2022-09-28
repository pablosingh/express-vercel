const express = require('express')
const app = express()
const routes = require('./src/routes/index.js');
const port = process.env.PORT || 3000;
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World! Pablo'));

app.use( '/', routes );

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})