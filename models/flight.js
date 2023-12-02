const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: { 
        type: String, 
        enum: [ 'ATL', 'LAX', 'ORD', 'DFW', 'DEN', 'JFK', 'SFO', 'SEA', 'LAS', 'CLT']
    },
    arrival: {
        type: Date
    }
})

const flightSchema = new Schema({
    airline: { 
        type: String, 
        enum: [ 'American', 'Southwest', 'United', 'Delta', 'Alaska', 'Spirit', 'Hawaiian' , 'JetBlue', 'Frontier', 'Allegiant']
    },
    airport: { 
        type: String, 
        default: 'DEN', 
        enum: [ 'ATL', 'LAX', 'ORD', 'DFW', 'DEN', 'JFK', 'SFO', 'SEA', 'LAS', 'CLT']
    },
    flightNo: { 
        type: Number, 
        required: true, 
        min: 10, 
        max: 9999 
    },
    departs: { 
        type: Date, 
        default: function() {
        const nextYear = new Date()
        nextYear.setFullYear(nextYear.getFullYear() + 1)
        return nextYear
    }},
    destinations: [destinationSchema]
}, {
    timestamps: true
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);