const express = require('express')
const server = express()
const port = process.env.PORT || 3000;
const routes = require('./src/routes/index2.js');
const { db } = require('./src/db.js');
server.use(express.json());

server.get('/', (req, res) => res.send('Hello World! 3'));

server.use( '/', routes );

// server.listen(port, () => {
//   console.log(`listening on port ${port}`)
// })

async function test() {
    try {
        await db.authenticate();
        return 'Connection: OK';
    } catch (error) {
        return 'Error Connection: ' +error;
    }
};

db.sync({ force: false }).then(() => {
    server.listen(port, async() => {
        console.log( await test() + ' || listening at '+ port);
        }   
    );
});

// if(process.env.NODE_ENV === 'production'){
//     const path  =  require('path');
//     app.get('/*',(req,res)=>{
//         res.sendfile(path.resolve(__dirname,'client','build','index.html'))
//     })
// }

// app.get('*', (req, res) =>{
//     res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });