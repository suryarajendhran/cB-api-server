const CompanyController = require('./controllers/CompanyController')

module.exports = (app) => {
  app.get('/status', (req, res) => {
    res.send({
      message: 'The server is up and running'
    })
  })
  app.post('/companies',
    CompanyController.register_company)
}
