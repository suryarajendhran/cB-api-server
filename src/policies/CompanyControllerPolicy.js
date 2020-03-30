const Joi = require('joi')
const state = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam',
  'Bihar', 'Chhattisgarh', 'Goa',
  'Gujarat', 'Haryana', 'Himachal Pradesh',
  'Jammu and Kashmir', 'Jharkhand', 'Karnataka',
  'Kerala', 'Madhya Pradesh', 'Maharashtra',
  'Manipur', 'Meghalaya', 'Mizoram',
  'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu',
  'Telangana', 'Tripura', 'Uttarakhand',
  'Uttar Pradesh', 'West Bengal', 'Andaman and Nicobar Islands',
  'Chandigarh', 'Dadra and Nagar Haveli', 'Daman and Diu',
  'Delhi', 'Lakshadweep', 'Puducherry']

module.exports = {
  register_company (req, res, next) {
    const dateIn = req.body.date_of_formation
    req.body.date_of_formation = new Date(dateIn)
    const schema = {
      name: Joi.string().regex(
        new RegExp('^[a-zA-Z. ]{8,128}$')
      ).required(),
      address: Joi.string().regex(
        new RegExp('([A-Za-z0-9]){1,200}')
      ).required(),
      pin: Joi.number().min(110000).max(899999).required(),
      state: Joi.string().valid(state).required(),
      pan: Joi.string().regex(
        new RegExp('[A-Z]{3}[ABCFGHLJPTF]{1}[A-Z]{1}[0-9]{4}[A-Z]{1}')
      ),
      gstin: Joi.string().regex(
        new RegExp('^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$')
      ),
      date_of_formation: Joi.date(),
      registration_number: Joi.string()
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
