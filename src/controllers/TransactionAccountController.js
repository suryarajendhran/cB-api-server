const { TransactionAccount } = require('../models')

module.exports = {
  async add_transaction_account (req, res) {
    try {
      const transactionAccount = await TransactionAccount.create(req.body)
      res.send(transactionAccount.toJSON())
    } catch (err) {
      res.status(400).send({
        error: `Error while adding transaction account to company: ${err}`
      })
    }
  }
}
