const Car = require('../models/Car')

const repairController = {
    addRepair: (req, res) => {
      const { id, description } = req.body 
      Car.findOneAndUpdate({ _id: id},
        { $addToSet: { repair: { description, ready: false }}},
        { new:true })
      .then(response => 
        res.status(201).json({ response })
      )
      .catch(error => 
        res.status(400).json({ error })
      )
    },
    changeRepairs: async ( req, res ) => {
      const { id, description, ready } = req.body
      const change = req.body.description ? {$set: {"repair.0.ready":  ready , "repair.0.description": description}} : {$set: {"repair.0.ready":  ready}}
      await Car.findOneAndUpdate({ _id: id},
        change)
      .then(response => 
        res.status(201).json({ response })
      )
      .catch(error => 
        res.status(400).json({ error })
      )
    },
    deleteRepair: (req, res) => {
        const { _id, id } = req.params
        Car.findOneAndUpdate(
            {_id: _id},
            {$pull: { repair: { _id: id }}},
            {new: true})
        .then(response => {
          res.status(201).json({ response })}
        )
        .catch(errores => 
          res.status(400).json({ errores })
        )
    }
}


module.exports = repairController