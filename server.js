const express = require('express');
const helmet = require('helmet');

const db = require('./data/db-config.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/recipes', (req, res) => {
});

server.get('/api/recipes', (req, res) => {
});

server.post('/api/recipes', (req, res) => {
});

server.delete('/api/recipes/:id', (req, res) => {
});

module.exports = server;
