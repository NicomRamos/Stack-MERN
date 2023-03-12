const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userController = {
  register: async (req, res) => {
    const { firstName, lastName, password, email, admin } = req.body

    const userExist = await User.findOne({ email: email })
    if (userExist) {
      return res.status(400).json({message: 'El mail esta registrado'})
    }

    const passHashed = bcryptjs.hashSync(password, 10)
    var newUser = new User({firstName, lastName, email, admin ,password: passHashed})
    var userSave = await newUser.save()

    try {
      var token = jwt.sign({ ...userSave }, process.env.SECRET_KEY, {})
      res.status(201).json({message: 'El usuario registrado', token })
    } catch (err){
      res.status(400).json({message: err.message})
    }
  },

  logIn: async (req, res) => {
    const { email, password } = req.body

    const userExists = await User.findOne({ email: email })
    if ( !userExists ) {
      return res.status(400).json({message: 'Usuario o contraseña es invalida.'})
    }

    const passMatchs = bcryptjs.compareSync(password, userExists.password)
    if ( !passMatchs ) {
      return res.status(400).json({message: 'Usuario o contraseña es invalida.'})
    }
    
    try {
      var token = jwt.sign({ ...userExists }, process.env.SECRET_KEY, {})
      res.status(201).json({email: userExists.email, token })
    } catch (err){
      res.status(400).json({message: err.message})
    }
  },
  logLS: (req, res) => {
    res.status(200).json({ token: req.body.token, email: req.user.email })
  },
};

module.exports = userController;