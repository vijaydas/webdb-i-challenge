const express = require('express');
const accountsdb = require("./data/accounts-model.js");

const server = express();
server.use(express.json());


// your code here


server.get("/", (req, res) => {
    accountsdb
      .find()
      .then(accounts => {
        res.status(201).json({
          accounts
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err,
          message: "no accounts"
        });
      });
  });
  
  

module.exports = server;