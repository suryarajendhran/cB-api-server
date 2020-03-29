const { Company } = require('../models')

module.exports = {
  async register_company (req, res) {
    try {
      const company = await Company.create(req.body)
      res.send(company.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'Error while creating company'
      })
    }
    res.send({
      message: `${req.body.name} was successfully registered!`
    })
  }
}
