const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

const usersRouter = require('../users/users-router.js')
const authRouter = require('../auth/auth-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/users', usersRouter)
server.use('/api/auth', authRouter)


server.get('/', (req, res) => {
    res.json("It's alive!");
});

//Comment for PR for second days project cookies and sessionss

module.exports = server; 