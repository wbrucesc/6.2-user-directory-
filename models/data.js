const mongoose = require('mongoose');


const robotSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  avatar: {},
  company: {},
  job: {},
  university: {},
  skills: [
    {}
  ],
  address: {
    city: {},
    country: {}
  },
  email: {},
  phone: {}
});

const Robot = mongoose.model('Robot', robotSchema);

module.exports = Robot;
