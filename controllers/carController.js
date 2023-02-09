const Car = require('../models/Car')

const carController = {
    addCar : async ( req, res) => {
      const clientId  = req.params.id
        const { model, patent, color } = req.body
        const carAdd = new Car({ model, patent, color, clientId })
        carAdd.save()
        .then(async carAdd=> {
            const car = await carAdd.populate('clientId').execPopulate()
            return res.json({success: true, respuesta: car})
        })
        .catch(error => {
          return res.json({success: false, error})
        })
    },
    allCars: (req, res) => {
        const {id} = req.params
        Car.find({ clientId: id }).exec()
        .then(response => {
          return res.json({success: true, response})
        })
        .catch(error => {
          return res.json({success: false, error})
        })
      },
    deleteCar: (req, res) => {
        const { id } = req.body
        Car.findByIdAndDelete({"_id": id})
        .then(response => {
          return res.json({success: true, response})
        })
        .catch(errores => {
          return res.json({
            success: false,
            errores,
            mensaje:'No se puede borrar la reparacion en este momento. Intente mas tarde'
          })
        })
    },
}
module.exports = carController