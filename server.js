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
  
  server.get('/:id', (req, res) => {
      const id = req.params.id;

      accountsdb.add
      .findById(id)
      .then( account => {
          res.status(200).json(account)
      })
      .catch(error => {
          res.status(500).json({ error: "There was an error in finding that id"})
      })

  }) 

  server.post('/', (req, res) => {
    // const newAccount = req.body;
    // console.log(newAccount)

    accountsdb
    .add(req.body)
    .then( account => {
        res.status(200).json(account)
    })
    .catch(error => {
        res.status(500).json({ error: "There was an error in add that account"})
    })

}) 



module.exports = server;