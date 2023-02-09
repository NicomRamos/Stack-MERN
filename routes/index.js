const express = require('express')
const router = express.Router()
const clientController = require('../controllers/clientController')
const carController = require('../controllers/carController')
const repairController = require('../controllers/repairController')

router.route('/client')
.get(clientController.allclient)
.post(clientController.addClient)
.delete(clientController.deleteClient)

router.route('/cars')
.delete(carController.deleteCar)

router.route('/cars/:id')
.get(carController.allCars)
.post(carController.addCar)

router.route('/repair')
.post(repairController.addRepair)
.put(repairController.changeRepairs)
.delete(repairController.deleteRepair)

module.exports = router