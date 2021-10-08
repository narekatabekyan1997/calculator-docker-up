const Router = require('express').Router();
const manager = require('../Managers/manager');
const validation = require('../validations/validation');

Router.post('/calculate', validation, manager.calculator);

module.exports = Router;
