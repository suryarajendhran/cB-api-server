const Joi = require('joi')

module.exports = {
  register_partner (req, res, next) {
    const dateIn = req.body.date_of_birth
    req.body.date_of_birth = new Date(dateIn)
    const schema = {
      name: Joi.string().regex(
        new RegExp('^[a-zA-Z. ]{8,128}$')
      ).required(),
      father_name: Joi.string().regex(
        new RegExp('^[a-zA-Z. ]{8,128}$')
      ).required(),
      pan: Joi.string().regex(
        new RegExp('[A-Z]{3}[ABCFGHLJPTF]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}')
      ),
      aadhar: Joi.string().regex(
        new RegExp('^[0-9]{12}$')
      ).required(),
      date_of_birth: Joi.date().required(),
      date_of_admission: Joi.date().required()
    }
    const { error, value } = Joi.validate(req.body, schema)
    console.log(value)

    if (error) {
      const errorKey = error.details[0].context.key
      res.status(400).send({
        error: `Provide a valid ${errorKey}`
      })
    } else {
      next()
    }
  }
}
