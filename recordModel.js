const mongoose= require('mongoose');


const dataScheme = new mongoose.Schema({
    timestamp: {
        type: Number,
        default: Date.now()
    },
    value1: {
        type: String,
        default: ""
    },
    value2: {
        type: mongoose.Decimal128,
        default: 0.0
    },
    value3: {
        type: Boolean,
        default: false
    },
    creationDate: {
        type: Number,
        default: Date.now()
    },
    lastModificationDate: {
        type: Number,
        default: Date.now()
      }
});

module.exports = mongoose.model('record',dataScheme);