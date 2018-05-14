const axios = require("axios");
let shipCrew = [];
let crewMember = [];
let starShip;

module.exports = {
  getPerson(req, res) {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        crewMember.push(response.data.results);
        console.log(crewMember);

        return res.status(200).json(response.data);
      })
      .catch(console.log());
  },
  addCrewMember(req, res) {
    shipCrew.push(req.body.selectedCrew);
    console.log(shipCrew);
  }
};
