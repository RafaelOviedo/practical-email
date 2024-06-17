const { Router } = require('express');
const router = Router();
const emailRouter = require('./email');

router.get('/', (req, res) => {
    res.send('hello practical-email api');
});

router.use('/email', emailRouter);

router.get('*', (req, res) => {
  res.status(404).send('not found');
})

module.exports = router;