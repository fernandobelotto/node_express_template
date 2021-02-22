import dotenv from "dotenv";
dotenv.config();

const { USER, PASSWORD } = process.env;

import { Sequelize } from 'sequelize';

const db = new Sequelize('mysql', USER, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
});

export default db