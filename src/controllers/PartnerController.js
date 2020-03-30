const { Partner } = require('../models')

module.exports = {
  async register_partner (req, res) {
    try {
      const partner = await Partner.create(req.body)
      res.send(partner.toJSON())
    } catch (err) {
      res.status(400).send({
        error: `Error while adding partner to company: ${err}`
      })
    }
  }
}
