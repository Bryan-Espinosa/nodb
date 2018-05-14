const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  port = process.env.PORT || 3001,
  app = express(),
  mc = require("./controllers/maincontroller");

app.use(bodyParser.json());
app.use(cors());

app.get("/api/getPerson", mc.getPerson);
app.post("/api/addCrewMember", mc.addCrewMember);
app.listen(port, () => console.log(`loud and clear at ${port}`));
