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
      include: [{
        model: models.Partner, as: 'Partners'
      },
      {
        model: models.Capital, as: 'Capitals'
      },
      {
        model: models.TransactionAccount, as: 'Transaction Accounts'
      },
      {
        model: models.Transaction, as: 'Transactions'
      }]
    })
    res.send({ companies })
  },
  // CRUD: R (SPECIFIC)
  async get_company (req, res) {
    try {
      const body = req.body
      const company = await Company.findOne({
        where: body,
        include: [{
          model: models.Partner, as: 'Partners'
        },
        {
          model: models.Capital, as: 'Capitals'
        },
        {
          model: models.TransactionAccount, as: 'Transaction Accounts'
        },
        {
          model: models.Transaction, as: 'Transactions'
        }]
      })
      if (company === null) {
        res.send('Company not found')
      }
      res.send(company)
    } catch (err) {
      res.status(400).send({
        error: `Error while retreiving company: ${err}`
      })
    }
  },
  // CRUD: U
  // request format: { updates: { "name": "Swoonz", "amount": "785"}, "id": "2"}
  async update_companies (req, res) {
    const updates = req.body.updates
    const key = req.body.id
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
  // TODO:
  // CRUD: D
}
