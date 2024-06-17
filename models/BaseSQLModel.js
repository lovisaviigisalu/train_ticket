const pool = require('../config/db');

class BaseSQLModel {
    constructor(tableName) {
        this.tableName = tableName;
    }

    async executeQuery(query, params) {
        try {
            const [results] = await pool.execute(query, params);
            return results;
        } catch (error) {
            throw error;
        }
    }

    async findAll() {
        const query = `SELECT * FROM ${this.tableName}`;
        return await this.executeQuery(query);
    }

    async findById(id) {
        const query = `SELECT * FROM ${this.tableName} WHERE id = ?`;
        const results = await this.executeQuery(query, [id]);
        return results[0];
    }

    async create(data) {
        const query = `INSERT INTO ${this.tableName} SET ?`;
        const result = await this.executeQuery(query, [data]);
        return result.insertId;
    }

    async update(id, data) {
        const query = `UPDATE ${this.tableName} SET ? WHERE id = ?`;
        return await this.executeQuery(query, [data, id]);
    }

    async delete(id) {
        const query = `DELETE FROM ${this.tableName} WHERE id = ?`;
        return await this.executeQuery(query, [id]);
    }
}

module.exports = BaseSQLModel;
