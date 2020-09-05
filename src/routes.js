const express = require('express');

const ActivitiesController = require('./controllers/ActivitiesController');
const ActivitiesCategoryController = require('./controllers/ActivitiesCategoryController');
const ActivitiesPersonController = require('./controllers/ActivitiesPersonController');
const CategoryController = require('./controllers/CategoryController');
const CoinController = require('./controllers/CoinController');
const UserController = require('./controllers/UserController');
const PersonController = require('./controllers/PersonController');
const PostController = require('./controllers/PostController');


const routes = express.Router();

routes.get('/activities', ActivitiesController.index);
routes.post('/activities', ActivitiesController.store);

routes.get('/activities_categories', ActivitiesCategoryController.index);
routes.post('/activities_categories', ActivitiesCategoryController.store);

routes.get('/activities_persons', ActivitiesPersonController.index);
routes.post('/activities_persons', ActivitiesPersonController.store);

routes.get('/categories', CategoryController.index);
routes.post('/categories', CategoryController.store);

routes.get('/coins', CoinController.index);
routes.post('/coins', CoinController.store);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/persons', PersonController.index);
routes.post('/persons', PersonController.store);

routes.get('/posts', PostController.index);
routes.post('/posts', PostController.store);

module.exports = routes;