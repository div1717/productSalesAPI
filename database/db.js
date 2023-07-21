// db.js
const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://divyansh:divyansh@cluster0.synmv6m.mongodb.net/RoxilerDB?retryWrites=true&w=majority';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

module.exports = mongoose;
