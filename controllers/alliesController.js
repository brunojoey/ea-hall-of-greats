const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Allies.find()
      .then((dbModel) => {
        console.log("DBMODEL", dbModel);
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Allies.findOne({ _id: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  }
};
