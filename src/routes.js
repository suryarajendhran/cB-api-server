const CompanyController = require('./controllers/CompanyController')
const CompanyControllerPolicy = require('./policies/CompanyControllerPolicy')

module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.send({
      message: 'The server is up and running'
    })
  })
  app.post('/companies',
    CompanyControllerPolicy.register_company,
    CompanyController.register_company)
}
