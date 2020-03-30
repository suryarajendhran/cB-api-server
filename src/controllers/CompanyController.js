const { Company } = require('../models')
const models = require('../models')

module.exports = {
  async register_company (req, res) {
    try {
      const company = await Company.create(req.body)
      res.send(company.toJSON())
    } catch (err) {
      res.status(400).send({
        error: `Error while creating company :${err}`
      })
    }
  },
  async get_companies (req, res) {
    const companies = await Company.findAll({
      include: [models.Partner, models.Capital]
    })
    res.send({ companies })
  }
}
