const clientController = require('../controllers/clientController')
const Client = require('../models/Client')

jest.mock('../models/Client')

// describe('POST /client', () => {
  // it('should add a new client', async () => {
  //   const req = {
  //     body: {
  //       firstname: 'John',
  //       lastname: 'Doe',
  //       email: 'johndoe@example.com'
  //     },
  //     user: {
  //       _id: '12345'
  //     }
  //   }
  //   const res = {
  //     status: jest.fn().mockReturnThis(),
  //     json: jest.fn()
  //   }

  //   await clientController.addClient(req, res)

  //   expect(res.status).toHaveBeenCalledWith(201)
  //   expect(res.json).toHaveBeenCalledWith({
  //     firstname: req.body.firstname,
  //     lastname: req.body.lastname,
  //     email: req.body.email
  //   })

    // const savedClient = await Client.findOne({ email: req.body.email })
    // expect(savedClient).toBeTruthy()
    // expect(savedClient.firstname).toBe(req.body.firstname)
    // expect(savedClient.lastname).toBe(req.body.lastname)
    // expect(savedClient.userId).toBe(req.user._id)
  // })

  // it('should return an error if a required field is missing', async () => {
  //   const req = {
  //     body: {
  //     },
  //     user: {
  //       _id: '12345'
  //     }
  //   }
  //   const res = {
  //     status: jest.fn().mockReturnThis(),
  //     json: jest.fn()
  //   }

  //   await clientController.addClient(req, res)

  //   expect(res.status).toHaveBeenCalledWith(400)
  //   expect(res.json).toHaveBeenCalledWith({ message: 'Por favor ingresa todos los campos requeridos.' })
  //   expect(await Client.findOne({ email: req.body.email })).toBeNull()
  // })

//   it('should return an error if the client already exists', async () => {
//     const existingClient = new Client({
//       firstname: 'John',
//       lastname: 'Doe',
//       email: 'johndoe@example.com',
//       userId: "609269995b2e888426d019ef"
//     })
//     await existingClient.save()

//     const req = {
//       body: {
//         firstname: 'Jane',
//         lastname: 'Doe',
//         email: existingClient.email
//       },
//       user: {
//         _id: "609269995b2e888426d019ef",
//       }
//     }
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn()
//     }

//     await clientController.addClient(req, res)

//     expect(res.status).toHaveBeenCalledWith(400)
//     expect(res.json).toHaveBeenCalledWith({ message: 'El mail del cliente ya esta registrado' })
//     expect(Client.countDocuments({ email: existingClient.email })).toBe(1)
//   })
// })

describe('GET /client', () => {
  it('deberia retornar clientes', async () => {
    const clients = [
      { name: 'Client A', email: 'clientA@example.com' },
      { name: 'Client B', email: 'clientB@example.com' },
      { name: 'Client C', email: 'clientC@example.com' },
    ]

    Client.find.mockResolvedValue(clients)

    const req = {}
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    }

    await clientController.allclient(req, res)

    expect(Client.find).toHaveBeenCalled()
    expect(res.status).toHaveBeenCalledWith(201)
    expect(res.json).toHaveBeenCalledWith({ response: clients })
  })
})

describe('DELETE /client/:id', () => {
  it('deberia borrar cliente y devolver la respuesta', async () => {
    const mockClient = new Client({ _id: 'client-id' })
    Client.findOneAndDelete.mockResolvedValueOnce(mockClient)

    const req = { params: { id: 'client-id' } }
    const res = {
      status: jest.fn().mockReturnThis(), 
      json: jest.fn()
    }

    await clientController.deleteClient(req, res)

    expect(Client.findOneAndDelete).toHaveBeenCalledWith({ _id: 'client-id' })
    expect(res.status).toHaveBeenCalledWith(201)
    expect(res.json).toHaveBeenCalledWith({ response: mockClient })
  })
})