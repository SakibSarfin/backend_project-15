/**
 * Message Model
 * Represents the structure of a message response.
 */
class MessageModel {
  constructor({ message, method, timestamp }) {
    this.message = message;
    this.method = method;
    this.timestamp = timestamp || new Date().toISOString();
  }

  toJSON() {
    return {
      success: true,
      message: this.message,
      method: this.method,
      timestamp: this.timestamp,
    };
  }
}

module.exports = MessageModel;