const express = require("express");
const { json } = require("body-parser");
const controller = require("./controller");
const port = 3001;
const massive = require("massive");
require("dotenv").config();

const app = express();
app.use(json());
massive(process.env.CONNECTION_STRING);

app.listen(port, () => console.log(`listening on port ${port}`));
