module.exports = {
  register_partner (req, res, next) {
    const dateIn = req.body.date_of_birth
    req.body.date_of_birth = new Date(dateIn)

    next()
  }
}
