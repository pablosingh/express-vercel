// const getOperationByPerson = require('./getOperationByPerson');
// const createOperation = require('./createOperation');
// const createPerson = require('./createPerson');
// const getPerson = require('./getPerson');
// const editOperation = require('./editOperation');
// const deleteOperation = require('./deleteOperation');
// const editPerson = require('./editPerson');
// const deletePerson = require('./deletePerson');

const { Router } = require('express');
const router = Router();

// router.get('/getOperationByPerson/:personId', getOperationByPerson );
// router.post('/createOperation', createOperation );
// router.put('/editOperation', editOperation );
// router.delete('/deleteOperation', deleteOperation);

// router.post('/createPerson', createPerson );
// router.get('/getPerson', getPerson );
// router.put('/editPerson', editPerson );
// router.delete('/deletePerson', deletePerson );

const todo = process.env;
const pro = process;
router.get('/get', (req,res)=> res.json({ msg: "ok", todo: todo, pro: pro }));

module.exports = router;