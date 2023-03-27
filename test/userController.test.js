var userController = require('../controllers/userController');
var User = require('../models/User');
var jwt = require('jsonwebtoken');
var bcryptjs = require('bcryptjs');

describe('POST /register',() => {
    it("debería registrar un usuario nuevo correctamente", async () => {
      const req = {
        body: {
          firstName: "John",
          lastName: "Doe",
          email: "john.doe@example.com",
          password: "153080747Nico",
          admin: false
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      User.findOne = jest.fn().mockResolvedValue(null);
      User.prototype.save = jest.fn().mockResolvedValueOnce({
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        password: bcryptjs.hashSync("password", 10),
        admin: false
      });
      jwt.sign = jest.fn().mockReturnValue("jwt_token");

      await userController.register(req, res);

      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        message: "Usuario registrado",
        token: "jwt_token",
        email: "john.doe@example.com"
      });
    });

    it("debería devolver un error si el correo electrónico ya está registrado", async () => {
      const req = {
        body: {
          firstName: "John",
          lastName: "Doe",
          email: "john.doe@example.com",
          password: "153080747Nico",
          admin: false
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      User.findOne = jest.fn().mockResolvedValue({
        email: "john.doe@example.com"
      });

      await userController.register(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({
        message: "El mail esta registrado"
      });
    });
});

describe('POST /login', () => {
  test('debe devolver un token y correo con status 200 cuando enviando correo electrónico y contraseña', async () => {

    const req = { body: { email: 'test@example.com', password: 'password123' } };
    const jsonMock = jest.fn();
    const statusMock = jest.fn(() => ({ json: jsonMock }));
    const res = { status: statusMock };
    
    const mockUser = {
      email: 'tes1t@example.com',
      password: bcryptjs.hashSync('password123', 10),
    };
    User.findOne = jest.fn(() => Promise.resolve(mockUser));

    const mockToken = 'mockToken';
    jwt.sign = jest.fn(() => mockToken);

    await userController.logIn(req, res);

    expect(statusMock).toHaveBeenCalledWith(201);
    expect(jsonMock).toHaveBeenCalledWith({ email: mockUser.email, token: mockToken });
  });
  test('debe devolver un error 400 cuando el correo o password es incorrecto', async () => {
    
    const req = { body: { email: 'test@example.com', password: 'password123' } };
    const jsonMock = jest.fn();
    const statusMock = jest.fn(() => ({ json: jsonMock }));
    const res = { status: statusMock };

    const mockUser = {
      email: 'test@example.com',
      password: bcryptjs.hashSync('wrongpassword', 10),
    };
    
    User.findOne = jest.fn(() => Promise.resolve(mockUser));

    await userController.logIn(req, res);

    expect(statusMock).toHaveBeenCalledWith(400);
    expect(jsonMock).toHaveBeenCalledWith({ message: 'Usuario o contraseña es invalida.' });
  });
});

describe('POST /ls', () => {
  test('debe devolver un status 200 con un token y correo', () => {
    const req = {
      body: {
        token: 'testToken'
      },
      user: {
        email: 'testEmail'
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    userController.logLS(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ token: 'testToken', email: 'testEmail' });
  });
});