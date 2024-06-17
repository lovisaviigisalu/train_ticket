const BaseSQLModel = require('./BaseSQLModel');

class Ticket extends BaseSQLModel {
    constructor() {
        super('tickets');
    }
}

module.exports = new Ticket();
