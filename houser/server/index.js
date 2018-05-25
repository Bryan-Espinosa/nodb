const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
require("dotenv").config();
const port = process.env.port || 3001;
const c = require("./controller");

const app = express();

app.use(json());
massive(process.env.CONNECTION_STRING)
  .then(dbInstance => app.set("db", dbInstance))
  .catch(err => console.log(err));
app.get("/api/houses", c.getHouses);
app.get("/api/house/:id", c.getoneHouse);
app.put("/api/house/:id", c.update);
app.post("/api/house", c.create);
app.delete("/api/house/:id", c.delete);

app.listen(port, () => console.log(`listening on port ${port}`));
