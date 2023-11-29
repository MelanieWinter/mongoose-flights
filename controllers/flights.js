const Flight = require('../models/flight')

module.exports = {
    index,
    new: newFlight
}

function newFlight(req, res) {
    res.render('flights/new', {
        errorMsg: '',
        title: 'Add New Flight'
    })
}

async function index(req, res) {
    const flights = await Flight.find({})
    res.render('flights/index', {
        flights, 
        title: 'All Flights'
    })
}