const Client = require('../models/Client')

const clientController = {
    addClient: async (req, res) => {
        const { firstname, lastname, email} = req.body
        var errores = []
        const  clientExist = await Client.findOne({ email: email })
        if ( clientExist ) {
            errores.push('El cliente ya esta registrado porque el mail esta usado, use otro mail')
        }
        if ( errores.length === 0) {
            var newClient = new Client({ firstname, lastname, email })
            var clientSave = await newClient.save()
        }
        return res.json({
            success: errores.length === 0 ? true : false, 
            errores,            
            response: errores.length === 0 && {
                firstname: clientSave.firstname, lastname: clientSave.lastname, email: clientSave.email
            }}) 
    },
    allclient: (req, res) => {
        Client.find()
        .then(response => {
            res.json({success: true, response})
        })
        .catch(error => {
            res.json({success: false, error})
        })
    },
    deleteClient:(req, res) => {
        const { id } = req.params
        Client.findOneAndDelete({ _id: id })
        .then(response => { 
            res.json({ success: true, response })
        })
        .catch(error => {
            res.json({ success: false, error })
        })
    }
}

module.exports = clientController