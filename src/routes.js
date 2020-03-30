const CompanyController = require('./controllers/CompanyController')
const CompanyControllerPolicy = require('./policies/CompanyControllerPolicy')
const PartnerController = require('./controllers/PartnerController')
const PartnerControllerPolicy = require('./policies/PartnerControllerPolicy')
module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.send({
      message: 'The server is up and running'
    })
  })
  app.get('/companies',
    CompanyController.get_companies
  )
  app.post('/companies',
    CompanyControllerPolicy.register_company,
    CompanyController.register_company
  )
  app.post('/:company_id/partner',
    PartnerControllerPolicy.register_partner,
    PartnerController.register_partner
  )
}
