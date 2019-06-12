const mongoose = require('mongoose');

const ServicesSchema = mongoose.Schema({
    name: String,
    orgName: String,
    address: {type: String, required: true},
    city: String,
    state: String,
    zip: Number,
    phone: Number,
    email: String,
    web: String,
    day: String,
    hours: Number,
    eligibility: String,
    description: String
});

const Services = mongoose.model('Services', ServicesSchema);

module.exports = Services;
