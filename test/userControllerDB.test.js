// const mongoose = require('mongoose');
// var userController = require('../controllers/userController');
// const request = require('supertest');
// const User = require('../models/User');
// require('dotenv').config();

// describe('User Controller', () => {
//   beforeAll(() => {
//     mongoose.connect(process.env.MONGODB_URI_TEST, {
//           useNewUrlParser: true,
//           useUnifiedTopology: true,
//           useCreateIndex: true,
//       });
//   });

//   afterAll(async () => {
//     await mongoose.disconnect();
//   });

//   beforeEach(async () => {
//     await User.deleteMany({});
//   });

//   describe('POST /register', () => {
//     it('should create a new user', async () => {
//       const newUser = {
//         firstName: 'John',
//         lastName: 'Doe',
//         password: '153080747Nico',
//         email: 'john.doe@example.com',
//         admin: true,
//       };

//       const response = await request(userController)
//         .post('/register')
//         .send(newUser)
//         .expect(201);

//       expect(response.body).toHaveProperty('token');
//       expect(response.body).toHaveProperty('email', newUser.email);

//       const user = await User.findOne({ email: newUser.email });
//       expect(user).toBeDefined();
//       expect(user.firstName).toBe(newUser.firstName);
//       expect(user.lastName).toBe(newUser.lastName);
//       expect(user.admin).toBe(newUser.admin);
//       expect(user.password).not.toBe(newUser.password);
//     });

//     it('should return an error if email is already registered', async () => {
//       const newUser = {
//         firstName: 'John',
//         lastName: 'Doe',
//         password: '153080747Nico',
//         email: 'john.doe@example.com',
//         admin: true,
//       };

//       const existingUser = new User(newUser);
//       await existingUser.save();

//       const response = await request(userController)
//         .post('/register')
//         .send(newUser)
//         .expect(400);

//       expect(response.body).toHaveProperty('message', 'El mail esta registrado');
//     });
//   });
// });