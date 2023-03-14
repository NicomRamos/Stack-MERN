const Car = require('../models/Car')

const carController = {
    addCar : async ( req, res) => {
      const clientId  = req.params.id
        const { model, patent, color } = req.body
        const carAdd = new Car({ model, patent, color, clientId })
        carAdd.save()
        .then(async carAdd=> {
            const car = await carAdd.populate('clientId').execPopulate()
            return res.status(201).json({ car })
        })
        .catch(error => {
          return res.status(400).json({ error })
        })
    },
    allCars: (req, res) => {
        const {id} = req.params
        Car.find({ clientId: id }).exec()
        .then(response => {
          return res.status(201).json({ response })
        })
        .catch(error => {
          return res.status(400).json({ error })
        })
      },
    deleteCar: (req, res) => {
      const { id } = req.params
        Car.findByIdAndDelete({_id: id})
        .then(response => {
          return res.status(201).json({ response })
        })
        .catch(errores => {
          return res.status(400).json({ errores })
        })
    },
}
module.exports = carController