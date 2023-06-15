import { Sequelize } from "sequelize";


const db = new Sequelize('app', ' ', ' ',{
    //host: "localhost",
    dialect: "sqlite",
    logging: false
});

export default db