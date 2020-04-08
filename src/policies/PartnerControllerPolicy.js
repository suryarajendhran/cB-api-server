const Joi = require('joi')

module.exports = {
  register_partner (req, res, next) {
    const dob = req.body.date_of_birth
    req.body.date_of_birth = new Date(dob)
    const doa = req.body.date_of_admission
    req.body.date_of_admission = new Date(doa)
    const dor = req.body.date_of_retirement
    req.body.date_of_retirement = new Date(dor)
    const schema = {
      name: Joi.string().regex(
        new RegExp('^[a-zA-Z. ]{4,128}$')
      ).required(),
      father_name: Joi.string().regex(
        new RegExp('^[a-zA-Z. ]{4,128}$')
      ).required(),
      pan: Joi.string().regex(
        new RegExp('[A-Z]{3}[ABCFGHLJPTF]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}')
      ),
      aadhar: Joi.string().regex(
        new RegExp('^[0-9]{12}$')
      ).required(),
      opening_balance: Joi.string().required(),
      date_of_birth: Joi.date().required(),
      address: Joi.string().required(),
      profit_ratio: Joi.string().required(),
      date_of_admission: Joi.date().required(),
      date_of_retirement: Joi.date(),
      CompanyId: Joi.date().required()
    }
    const { error } = Joi.validate(req.body, schema)
    const valid = error == null

    if (valid) {
      next()
    } else {
      const { details } = error
      const message = details.map(i => i.message).join(',')

      console.log('error', message)
      res.status(422).json({ error: message })
    }
  }
}
