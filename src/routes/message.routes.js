const express = require('express');
const router = express.Router();
const { getMessage, postMessage } = require('../controllers/message.controller');

/**
 * @route   GET /api/message
 * @desc    Returns "I am get request."
 * @access  Public
 */
router.get('/', getMessage);

/**
 * @route   POST /api/message
 * @desc    Returns "I am post request."
 * @access  Public
 */
router.post('/', postMessage);

module.exports = router;