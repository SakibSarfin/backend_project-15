const MessageModel = require('../models/message.model');

/**
 * Handle GET /api/message
 * Returns: "I am get request."
 */
const getMessage = (req, res) => {
  try {
    const response = new MessageModel({
      message: 'I am get request.',
      method: 'GET',
    });

    return res.status(200).json(response.toJSON());
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Handle POST /api/message
 * Returns: "I am post request."
 */
const postMessage = (req, res) => {
  try {
    const response = new MessageModel({
      message: 'I am post request.',
      method: 'POST',
    });

    return res.status(201).json(response.toJSON());
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { getMessage, postMessage };