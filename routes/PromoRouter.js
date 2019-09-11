const express = require('express');
const bodyParser = require('body-parser');
const promoRouter = express.Router();
const Promos = require('../models/promo');
promoRouter.use(bodyParser.json());
promoRouter.route('/')

  .get((req, res, next) => {
    Promos.find({}).then((promo) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(promo);
    }, (err) => next(err))
      .catch((err) => {
        next(err);
      })
  })

  .post((req, res, next) => {
    Promos.create(req.body)
      .then((promo) => {
        console.log("promo entered  ", promo);
        res.statusCode = 200;
        console.log("Tracking the flow     " + res.statusCode);
        res.setHeader('Content-Type', 'application/json');
        res.json(promo);
      }, (err) => next(err))
      .catch((err) => {
        next(err);
      })
  })
  .put((req, res, next) => {
    res.end('updated promo are in put: ' + req.body.name + ' and id :' + req.body.id);
  })
  .delete((req, res, next) => {
    Promos.remove({}).then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
    }, (err) => next(err))
      .catch((err) => {
        next(err);
      })
  });

promoRouter.route('/:PromoId')
  .get((req, res, next) => {
    Promos.findById(req.params.PromoId).then((promo) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(promo);
    }, (err) => next(err))
      .catch((err) => {
        next(err);
      })
  })

  .post((req, res, next) => {
    res.end('promos are in post: ' + req.body.name + ' with param' + req.params.promoId);
  })
  .put((req, res, next) => {
    Promos.findByIdAndUpdate(req.params.promoId, {
      $set: req.body
    }, { new: true }).then((promo) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(promo);
    }, (err) => next(err))
      .catch((err) => {
        next(err);
      })
  })

  .delete((req, res, next) => {
    Promos.findByIdAndRemove(req.params.promoId).then((resp) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(resp);
    }, (err) => next(err))
      .catch((err) => {
        next(err);
      })
  });
module.exports = promoRouter;