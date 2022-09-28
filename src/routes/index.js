const { Router } = require('express');
const router = Router();

router.get('/get', (req,res)=> res.json({ msg: "ok" }));

module.exports = router;