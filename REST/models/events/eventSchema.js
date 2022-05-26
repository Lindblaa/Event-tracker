const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({

    user:       { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    name:       { type: String, required: true },
    desc:       { type: String },
    date:       { type: Date, required: true }

}, { timestamps: true })


module.exports = mongoose.model('Event', eventSchema)