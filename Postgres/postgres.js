import { Sequelize } from "sequelize";

const sequelize = new Sequelize('postgres', 'postgres', 'sa123', {
    host: 'localhost',
    dialect: 'postgres'
});

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export { connection };