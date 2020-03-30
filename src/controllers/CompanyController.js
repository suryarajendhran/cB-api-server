const { Company } = require('../models')
const models = require('../models')

module.exports = {
  // CRUD: C
  async add_company (req, res) {
    try {
      const company = await Company.create(req.body)
      res.send(company.toJSON())
    } catch (err) {
      res.status(400).send({
        error: `Error while creating company :${err}`
      })
    }
  },
  // CRUD: R
  async get_companies (req, res) {
    const companies = await Company.findAll({
      include: [models.Partner, models.Capital]
    })
    res.send({ companies })
  },
  // CRUD: U
  // request format: { updates: { "name": "Swoonz", "amount": "785"}, "id": "2"}
  async update_companies (req, res) {
    const updates = req.body.updates
    const key = req.body.id
    console.log(updates)
    console.log(key)
    await Company.update(
      updates,
      { where: { id: key } }
    ).then((result) => {
      res.send('Success')
    }).catch((err) => {
      res.status(400).send({
        error: `Error while updating company :${err}`
      })
    })
  }
}
