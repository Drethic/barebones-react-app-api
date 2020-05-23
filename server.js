const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require('cors');
const helmet = require('helmet');
const authRouter = require("./auth/auth-router.js");
const userRouter = require("./users/users-router.js");
const categoryRouter = require("./categories/categories-router.js");
const ingredientRouter = require("./ingredients/ingredients-router.js");
const unitRouter = require("./units/units-router.js");
const recipesInstructionRouter = require("./recipes_instructions/recipes-instructions-router.js");
const recipesRouter = require("./recipes/recipes-router.js");



const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(cookieParser());

server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);
server.use('/api/categories', categoryRouter);
server.use('/api/ingredients', ingredientRouter);
server.use('/api/units', unitRouter);
server.use('/api/recipes_instructions', recipesInstructionRouter);
server.use('/api/recipes', recipesRouter);


server.use((req, res) => {
    res.status(404).json({message: "Route not found"})
})

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({error: "Something went wrong"})
})

module.exports = server;