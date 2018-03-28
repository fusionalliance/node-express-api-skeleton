const express = require('express');

const router = new express.Router();

router.use(require('./getRoot'));

module.exports = router;
