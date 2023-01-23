const Car = require('../models/Car')

const repairController = {
    addRepair: (req, res) => {
      const { id, description } = req.body 
      Car.findOneAndUpdate({ _id: id},
        { $addToSet: { repair: { description, ready: false }}},
        { new:true })
      .then(response => res.json({success: true, response }))
      .catch(error => res.json({success: false, error }))
    },
    changeRepairs: async ( req, res ) => {
      const { id, description, ready } = req.body
      const change = req.body.description ? {$set: {"repair.0.ready":  ready , "repair.0.description": description}} : {$set: {"repair.0.ready":  ready}}
      await Car.findOneAndUpdate({ _id: id},
        change)
      .then(response => 
        res.json({success: true, response })
      )
      .catch(error => 
        res.json({success: false, error })
      )
    },
    deleteRepair: (req, res) => {
        const {id, idRepair } = req.body
        Car.findOneAndUpdate(
            {_id: id},
            {$pull: { repair: { _id: idRepair }}},
            {new: true})
        .then(response => 
          res.json({success: true, response})
        )
        .catch(errores => 
          res.json({
            success: false,
            errores,
            mensaje:'No se puede borrar la reparacion en este momento. Intente mas tarde'
          })
        )
    }
}


module.exports = repairController