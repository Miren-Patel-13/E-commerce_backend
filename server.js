import express from 'express';
import { connection } from './Postgres/postgres.js';

const app = express();

const Port = 5000;

app.use(express.json());

connection();

app.listen(Port, () => {
    console.log("Server Started...");
});
