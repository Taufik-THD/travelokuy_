const checkLoginRegister = (req, res, next) => {

  if (req.session.email) {
    res.send('ada yang login')
  } else {
    next()
  }

}

module.exports = checkLoginRegister;
