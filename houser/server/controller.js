const axios = require("axios");
let houseList = [];

module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { name, address, city, state, zipcode } = req.body;
    dbInstance
      .create_house([name, address, city, state, zipcode])
      .then(() => re.status(200).send())
      .catch(() => res.status(500).send());
  },
  getoneHouse: (req, res, next) => {
    const dbInstance = rep.app.get("db");
    const { params } = req;
    dbInstance
      .read_house([params.id])
      .then(house => res.status(200).send(house))
      .catch(() => res.status(500).send());
  },
  getHouses: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .read_houses()
      .then(houses => res.status(200).send(houses))
      .catch(() => res.status(500).send());
  },
  update: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params, query } = req;
    dbInstance
      .update_house([params.id, query.desc])
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send());
  },
  delete: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { params } = req;
    dbInstance
      .delete_house([params.id])
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send());
  }
};
