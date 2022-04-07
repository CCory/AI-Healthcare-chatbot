const express = require('express');

const router = express.Router();

const doctors = require('./doctors');
const appointments = require('./appointments');
const googleLogin = require('../controllers/login');

router.use('/doctors', doctors);
router.use('/appointments', appointments);
router.post('/login/google/', googleLogin);


router.use((req, res) => {
  res.status(404).json({
    status: 404,
    message: 'Bad request',
  });
});


module.exports = router;
