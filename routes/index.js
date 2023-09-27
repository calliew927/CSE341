const routes = require('express').Router();

const myController = require('../controllers')

routes.get('/', myController.awesomeFunction);
routes.get('/contacts',myController.contactFunction);

module.exports = routes;