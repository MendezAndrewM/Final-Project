const db = require("../models/");

module.exports = {
    findAll: function(req, res) {
        db.Review
          .find(req.query)
          .sort({ location: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findById: function(req, res) {
        db.Review
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        console.log(req);
        db.Review
          .create(req.body)
          .then(dbModel => 
            { 
              console.log(dbModel);
              res.json(dbModel)
            })
          .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        db.Review
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        db.Review
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findForBusiness: (req, res) => {
        db.Review
        .find({ businessId: req.params.id })
        // .sort({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      }
}