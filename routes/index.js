const express = require('express')
const router = express.Router()
const clientController = require('../controllers/clientController')
const carController = require('../controllers/carController')
const repairController = require('../controllers/repairController')
const userController = require('../controllers/userController')
const validator = require("../controllers/validator")
const authenticateUser = require('../config/passport')


router.route('/client')
.get(clientController.allclient)
.post(authenticateUser, clientController.addClient)

router.route('/client/:id')
.delete(authenticateUser, clientController.deleteClient)

router.route('/cars/:id')
.get(carController.allCars)
.post(carController.addCar)
.delete(carController.deleteCar)

router.route('/repair')
.post(repairController.addRepair)
.put(authenticateUser, repairController.changeRepairs)

router.route('/repair/:_id/:id')
.delete(repairController.deleteRepair)

router.route("/login")
.post(userController.logIn)

router.route("/register")
.post(validator.register, userController.register)

router.route("/ls")
.post(authenticateUser, userController.logLS)

module.exports = router