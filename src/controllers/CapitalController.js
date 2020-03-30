const { Capital } = require('../models')

module.exports = {
  async add_capital (req, res) {
    try {
      const capital = await Capital.create(req.body)
      res.send(capital.toJSON())
    } catch (err) {
      res.status(400).send({
        error: `Error while adding capital :${err}`
      })
    }
  }
}
