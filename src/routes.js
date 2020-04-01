const CompanyController = require('./controllers/CompanyController')
const CompanyControllerPolicy = require('./policies/CompanyControllerPolicy')
const PartnerController = require('./controllers/PartnerController')
const PartnerControllerPolicy = require('./policies/PartnerControllerPolicy')
const CapitalController = require('./controllers/CapitalController')
const TransactionAccountController = require('./controllers/TransactionAccountController')
const TransactionController = require('./controllers/TransactionController')
module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.send({
      message: 'The server is up and running'
    })
  })
  app.get('/companies',
    CompanyController.get_companies
  )
  app.post('/company',
    CompanyController.get_company
  )
  app.post('/companies',
    CompanyControllerPolicy.add_company,
    CompanyController.add_company
  )
  // TODO: Remove company_id or make it work
  app.post('/:company_id/partner',
    PartnerControllerPolicy.register_partner,
    PartnerController.register_partner
  )
  app.put('/companies',
    CompanyController.update_companies
  )
  app.post('/capital',
    CapitalController.add_capital
  )
  app.post('/transaction_account',
    TransactionAccountController.add_transaction_account
  )
  app.post('/transaction',
    TransactionController.add_transaction
  )
}
