const db = require("../models");



module.exports = {
    // users shit
    findAll: function (req, res){
        db.userSchema
            .find(req.query)
            .sort({id: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err)); 
    },
    findById: function(req, res) {
        db.userSchema
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.userSchema
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.userSchema
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    remove: function(req, res) {
        db.userSchema
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    // end of user shit
    // business shit
    findAll: function (req, res){
        db.businessSchema
            .find(req.query)
            .sort({id: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err)); 
    },
    findById: function(req, res) {
        db.businessSchema
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.businessSchema
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
        db.businessSchema
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    remove: function(req, res) {
        db.businessSchema
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    // end of business shit
    
}