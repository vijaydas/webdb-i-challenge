const express = require('express');
const accountsdb = require("./data/accounts-model.js");

const server = express();
server.use(express.json());


// your code here
server.get("/", (req, res) => {
    accountsdb
      .find()
      .then(accounts => {
        res.status(200).json({ message: "accounts recieved", accounts });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({ message: "could not get accounts" });
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
 //   const newAccount = { name, budget } = req.body
     accountsdb.add(req.body)
    .then( account => {
        res.status(201).json(account)
    })
    .catch(error => {
        res.status(500).json({ error: "That's an error posting." })
    })
})


server.delete('/:id', (req, res) => {
    //   const newAccount = { name, budget } = req.body
    accountsdb
    .remove(req.params.id,req.body)
    .then(account => {
      res.status(201).json(account);
    })

    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "could not update account" });
    });
});

server.put('/:id', (req, res) => {

})   



module.exports = server;