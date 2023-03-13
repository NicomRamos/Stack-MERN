const Client = require('../models/Client')

const clientController = {
    addClient: async (req, res) => {
        const { firstname, lastname, email } = req.body
        const userId = req.user._id
        const  clientExist = await Client.findOne({ email: email })
        if ( !firstname || !email || !email ) {
            return res.status(400).json({ message: 'Por favor ingresa todos los campos requeridos.' })
        }
        if ( clientExist ) {
            return res.status(400).json({ message: 'El mail del cliente ya esta registrado' })
        }

        var newClient = new Client({ firstname, lastname, email, userId })
        var clientSave = await newClient.save()
        try {
            res.status(201).json({ firstname: clientSave.firstname, lastname: clientSave.lastname, email: clientSave.email})
        } catch (err) {
            res.status(400).json({ err })
        }
    },
    allclient: (req, res) => {
        Client.find()
        .then(response => {
            res.status(201).json({ response })
        })
        .catch(error => {
            res.status(400).json({ error })
        })
    },
    deleteClient:(req, res) => {
        const { id } = req.params
        Client.findOneAndDelete({ _id: id })
        .then(response => { 
            res.status(201).json({ response })
        })
        .catch(error => {
            res.status(400).json({ error })
        })
    }
}

module.exports = clientController