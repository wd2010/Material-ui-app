module.exports = {
  port: 3002,
  url: 'mongodb://localhost:27017/material-ui-app',
  session: {
    name: 'SID',
    secret: 'SID',
    cookie: {
      httpOnly: true,
      secure:   false,
      maxAge:   365 * 24 * 60 * 60 * 1000,
    }
  }
}