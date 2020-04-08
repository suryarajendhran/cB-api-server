const { Customer } = require('../models')

module.exports = {
  async register_customer (req, res) {
    try {
      const customer = await Customer.create(req.body)
      res.send(customer.toJSON())
    } catch (err) {
      res.status(400).send({
        error: `Error while adding customer to company: ${err}`
      })
    }
  }
}
