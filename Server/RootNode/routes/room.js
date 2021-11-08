const express = require('express');

const router  = express.Router(); 
const roomController = require('../controllers/room'); 

router.post('/room', roomController.create); 
module.exports = router;