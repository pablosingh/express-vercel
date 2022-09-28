const { Router } = require('express');
const router = Router();
const test = require('./test');

router.get('/router', (req,res)=> res.json({ msg: "ok" }));
router.get('/test', test );

module.exports = router;