'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const http = require('http');
const graphqlHttp = require('express-graphql');
const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolvers');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');
const app = express();
const server = http.createServer(app);

//middleware to serve static content from a specified folder
app.use(express.static(publicPath));

app.use('/graphql', 
    graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true
    })
);

server.listen(port, ()=> { console.log(`Server Up... Listening at Port: ${port}`)});

