const Ticket = require('../models/Ticket');

exports.getAllTickets = async (req, res) => {
    try {
        const tickets = await Ticket.findAll();
        res.json(tickets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTicketById = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        if (ticket) {
            res.json(ticket);
        } else {
            res.status(404).json({ message: 'Ticket not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createTicket = async (req, res) => {
    try {
        const newTicketId = await Ticket.create(req.body);
        res.status(201).json({ id: newTicketId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateTicket = async (req, res) => {
    try {
        const rowsAffected = await Ticket.update(req.params.id, req.body);
        if (rowsAffected) {
            res.json({ message: 'Ticket updated successfully' });
        } else {
            res.status(404).json({ message: 'Ticket not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteTicket = async (req, res) => {
    try {
        const rowsAffected = await Ticket.delete(req.params.id);
        if (rowsAffected) {
            res.json({ message: 'Ticket deleted successfully' });
        } else {
            res.status(404).json({ message: 'Ticket not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
