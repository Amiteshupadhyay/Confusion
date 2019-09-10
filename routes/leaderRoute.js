const express = require('express');
const bodyParser = require('body-parser');
const leaderRouter = express.Router();
const Leaders = require('../models/leader');

leaderRouter.use(bodyParser.json());
leaderRouter.route('/')

  .get((req, res, next) => {
    Leaders.find({}).then((leader) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(leader);
    }, (err) => next(err))
      .catch((err) => {
        next(err);
      })
  })

  .post((req, res, next) => {
    Leaders.create(req.body)
      .then((leader) => {
        console.log("Leader entered  ", leader);
        res.statusCode = 200;
        console.log("Tracking the flow     " + res.statusCode);
        res.setHeader('Content-Type', 'application/json');
        res.json(leader);
      }, (err) => next(err))
      .catch((err) => {
        next(err);
      })
  })
  .put((req, res, next) => {
    res.end('updated leader are in put: ' + req.body.name + ' and id :' + req.body.id);
  })
  .delete((req, res, next) => {
    Leaders.remove({}).then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
    }, (err) => next(err))
      .catch((err) => {
        next(err);
      })
  });

leaderRouter.route('/:leaderId')
  .get((req, res, next) => {
    Leaders.findById(req.params.leaderId).then((leader) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(leader);
    }, (err) => next(err))
      .catch((err) => {
        next(err);
      })
  })

  .post((req, res, next) => {
    res.end('leaders are in post: ' + req.body.name + ' with param' + req.params.leaderId);
  })
  .put((req, res, next) => {
    Leaders.findByIdAndUpdate(req.params.leaderId, {
      $set: req.body
    }, { new: true }).then((leader) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(leader);
    }, (err) => next(err))
      .catch((err) => {
        next(err);
      })
  })

  .delete((req, res, next) => {
    Leaders.findByIdAndRemove(req.params.leaderId).then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
    }, (err) => next(err))
      .catch((err) => {
        next(err);
      })
  });



module.exports = leaderRouter;