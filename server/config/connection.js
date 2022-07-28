const mongoose = require('mongoose');

mongoose.connect(
  "mongodb://localhost:27017/no-bs-bc",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;