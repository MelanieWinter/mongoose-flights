const Ticket = require('../models/ticket') 
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
};

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    try {
        await Ticket.create({ ...req.body, flight: flight._id })
    } catch(err) {
        console.log(err)
    }
    res.redirect(`/flights/${flight._id}`);
}

async function newTicket(req, res) {
    const flight = await Flight.findById(req.params.id);
    
    try {
        const tickets = await Ticket.find({ flight: flight._id });
        res.render('tickets/new', { title: 'Add New Ticket', tickets, flight });
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}
