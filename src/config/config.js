module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'clean_books',
    user: process.env.DB_USER || 'clean_books_app',
    password: process.env.DB_PASS || 'testAdmin',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './cleanBooks.sqlite'
    }
  }
}
