const Joi = require("joi");

const validator = {
  register: (req, res, next) => {
    const schema = Joi.object({
      firstName: Joi.string(),
      lastName: Joi.string(),
      email: Joi.string().trim().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
      password: Joi.string().pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/),
      admin: Joi.boolean()
    });
    const validation = schema.validate(req.body, { abortEarly: false });
    if (!validation.error) {
      next();
    } else {
      res.status(400).json({message: 'Complete todos los campos'})
    }
  },
};

module.exports = validator;
