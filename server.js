const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8000;
const knex = require("./db/knex");

const app = express();

app.get("/todos", (req, res) => {
  knex.raw("SELECT * FROM todos").then(result => {
    res.json(result.rows);
  });
});

app.get("/todos/:id", (req, res) => {
  knex.raw(`SELECT * FROM todos WHERE id = ${req.params.id}`).then(result => {
    if (!result.rows.length) {
      res.status(400).json({
        status: 400,
        message: "can't find the todo you are looking for"
      });
    } else {
      res.json(result.rows);
    }
  });
});

app.use(cors());
app.use(bodyParser.json());

app.listen(port);
