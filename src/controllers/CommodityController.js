const { Commodity } = require('../models')
const models = require('../models')

module.exports = {
  // CRUD: C
  async add_commodity (req, res) {
    try {
      const commodity = await Commodity.create(req.body)
      res.send(commodity.toJSON())
    } catch (err) {
      res.status(400).send({
        error: `Error while adding commodity :${err}`
      })
    }
  },
  // CRUD: R
  async get_commodities (req, res) {
    try {
      const commodities = await Commodity.findAll({ include: [models.Sale] })
      res.send({ commodities })
    } catch (err) {
      res.status(400).send({
        error: `Error while retreiving commodites :${err}`
      })
    }
  },
  // CRUD: U
  async update_commodity (req, res) {
    const updates = req.body.updates
    const key = req.body.id
    await Commodity.update(
      updates,
      { where: { id: key } }
    ).then((result) => {
      res.send('Sucess')
    }).catch((err) => {
      res.status(400).send({
        error: `Error while updating commodity :${err}`
      })
    })
  }
  // TODO:
  // CRUD: D
}
