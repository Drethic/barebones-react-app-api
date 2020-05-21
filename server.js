const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const helmet = require('helmet');
const authRouter = require("./auth/auth-router.js");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(cookieParser());

server.use('/api/auth', authRouter);


server.use((req, res) => {
    res.status(404).json({message: "Route not found"})
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({error: "Something went wrong"})
})

module.exports = server;