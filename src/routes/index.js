const { Router } = require('express');
const router = Router();

router.get('/', (req,res)=> res.json({ msg: "ok ok" }));

module.exports = router;