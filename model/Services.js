const mongoose = require('mongoose');

const ServicesSchema = mongoose.Schema({
    name: String,
    city: String,
    state: String,
    zip: String,
    phone: String,
    email: String,
    web: String,
    day: [String],
    opening: [String],
    closing: [String],
    eligibility: String,
    description: String
});

const Services = mongoose.model('Services', ServicesSchema);

module.exports = Services;
