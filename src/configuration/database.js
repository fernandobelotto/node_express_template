import { Sequelize } from 'sequelize';

let { USER, PASSWORD } = process.env

const db = new Sequelize('mysql', USER, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
});

export default db