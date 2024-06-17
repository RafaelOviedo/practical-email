const { Router } = require('express');
const router = Router();
const email = require('../controllers/email');

router.post('/:to_email_address', email.sendEmail);

module.exports = router;