import Sequelize from "sequelize";

export const sequelize = new Sequelize('API Products','postgres','root',{
    host: 'localhost',
    dialect: 'postgres'
});

