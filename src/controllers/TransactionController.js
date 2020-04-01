const { Transaction } = require('../models')
const { TransactionAccount } = require('../models')

module.exports = {
  async add_transaction (req, res) {
    try {
      const transaction = await Transaction.create(req.body)
      const transactionAccount = await TransactionAccount.findByPk(transaction.TransactionAccountId)
      var finalBalance = 0
      if (transaction.type === 'debt') {
        console.log('Debt operation, amount:')
        console.log(transaction.amount)
        finalBalance = transactionAccount.balance - transaction.amount
      } else if (transaction.type === 'credit') {
        console.log('Credit operation, amount:')
        console.log(transaction.amount)
        finalBalance = parseFloat(transactionAccount.balance) + parseFloat(transaction.amount)
      } else {
        finalBalance = transactionAccount.balance
        res.status(400).send({
          error: `Incorrect transaction type: ${transaction.type}`
        })
      }
      console.log(`Final amount is ${finalBalance}`)
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
