import { Sequelize } from 'sequelize';

const db = new Sequelize('mysql', 'root', '123123', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db