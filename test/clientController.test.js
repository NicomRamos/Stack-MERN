// const Client = require('../models/Client')
// const clientController = require('../controllers/clientController')

// describe('addClient', () => {
//   it('should add a new client', async () => {
//     const req = {
//       body: {
//         firstname: 'John',
//         lastname: 'Doe',
//         email: 'johndoe@example.com'
//       },
//       user: {
//         _id: '12345'
//       }
//     }
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn()
//     }

//     await clientController.addClient(req, res)

//     expect(res.status).toHaveBeenCalledWith(201)
//     expect(res.json).toHaveBeenCalledWith({
//       firstname: req.body.firstname,
//       lastname: req.body.lastname,
//       email: req.body.email
//     })

//     const savedClient = await Client.findOne({ email: req.body.email })
//     expect(savedClient).toBeTruthy()
//     expect(savedClient.firstname).toBe(req.body.firstname)
//     expect(savedClient.lastname).toBe(req.body.lastname)
//     expect(savedClient.userId).toBe(req.user._id)
//   })

//   it('should return an error if a required field is missing', async () => {
//     const req = {
//       body: {
//         firstname: 'John',
//         lastname: 'Doe'
//       },
//       user: {
//         _id: '12345'
//       }
//     }
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn()
//     }

//     await clientController.addClient(req, res)

//     expect(res.status).toHaveBeenCalledWith(400)
//     expect(res.json).toHaveBeenCalledWith({ message: 'Por favor ingresa todos los campos requeridos.' })
//     expect(await Client.findOne({ email: req.body.email })).toBeNull()
//   })

//   it('should return an error if the client already exists', async () => {
//     const existingClient = new Client({
//       firstname: 'John',
//       lastname: 'Doe',
//       email: 'johndoe@example.com',
//       userId: '12345'
//     })
//     await existingClient.save()

//     const req = {
//       body: {
//         firstname: 'Jane',
//         lastname: 'Doe',
//         email: existingClient.email
//       },
//       user: {
//         _id: '12345'
//       }
//     }
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn()
//     }

//     await clientController.addClient(req, res)

//     expect(res.status).toHaveBeenCalledWith(400)
//     expect(res.json).toHaveBeenCalledWith({ message: 'El mail del cliente ya esta registrado' })
//     expect(await Client.countDocuments({ email: existingClient.email })).toBe(1)
//   })
// })