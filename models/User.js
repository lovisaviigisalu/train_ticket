const BaseSQLModel = require('./BaseSQLModel');

class User extends BaseSQLModel {
    constructor() {
        super('users');
    }
}

module.exports = new User();
