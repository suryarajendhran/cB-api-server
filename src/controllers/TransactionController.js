const { Transaction } = require('../models')
const { TransactionAccount } = require('../models')

module.exports = {
  async add_transaction (req, res) {
    try {
      const transaction = await Transaction.create(req.body)
      const transactionAccount = await TransactionAccount.findByPk(transaction.TransactionAccountId)
      const finalBalance = transactionAccount.balance - transaction.amount
      await TransactionAccount.update(
        { balance: finalBalance },
        { where: { id: transactionAccount.id } }
      )
        .then(res.send('Success'))
        .catch((err) => {
          res.status(400).send({
            error: `Error while updating transaction account: ${err}`
          })
        })
    } catch (err) {
      res.status(400).send({
        error: `Error while registering transaction: ${err}`
      })
    }
  }
}
