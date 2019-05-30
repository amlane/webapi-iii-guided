const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');

const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

server.use(express.json()); //built in middleware
server.use(helmet());
server.use(logger);
// server.use(auth)

server.use('/api/hubs', hubsRouter);


server.get('/', addName, (req, res) => {
  const nameInsert = (req.name) ? ` ${req.name}` : '';

  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome${nameInsert} to the Lambda Hubs API</p>
    `);
});

function logger(req, res, next) {
  console.log(`a request made for ${req.method} request to ${req.url}`);
  next();
}

function addName(req, res, next) {
  req.name = "Web 19";
  next();
}

// function auth(req, res, next){
//     res.status(401).json({ message: "You Shall Not Pass!" })
// }

module.exports = server;
