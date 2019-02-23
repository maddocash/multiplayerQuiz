const mongoose = require('mongoose');

const actionSchema = {
  action: Object
};

module.exports = mongoose.model('actions', actionSchema);
