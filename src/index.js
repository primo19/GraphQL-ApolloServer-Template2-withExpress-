import express from "express";
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

require('dotenv').config({ path: 'variables.env' });

const server = async () => {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    server.applyMiddleware({ app });

    mongoose.set('useCreateIndex', true);

    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    } catch (err) {
        console.log(err)
    }


    app.get('/', (req, res) => res.send('hello world'))

    app.listen({ port: 4000 }, () => {
        console.log('Connected')
    })
}

server();