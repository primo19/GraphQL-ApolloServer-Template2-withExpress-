import express from "express";
import mongoose from "mongoose";

const server = async () => {
    const app = express();

    app.get('/', (req, res) => res.send('hello world'))

    app.listen({ port: 4000 }, () => {
        console.log('Connected')
    })
}

server();