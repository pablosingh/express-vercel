const { Router } = require('express');
const router = Router();

router.get('/router', (req,res)=> res.json({ msg: "ok" }));

module.exports = router;