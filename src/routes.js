const express = require('express');

const ActivitiesController = require('./controllers/ActivitiesController');


const routes = express.Router();

routes.get('/activities', ActivitiesController.index);
routes.post('/activities', ActivitiesController.store);

module.exports = routes;