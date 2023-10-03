const mongoose = require('mongoose');

const shameSchema = mongoose.Schema({
    author : {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    count: {type: Number}
});

module.exports = mongoose.model('Shame', shameSchema);