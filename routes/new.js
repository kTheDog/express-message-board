const {Router} = require('express')

const newRouter = Router()



newRouter.route('/')
  .get((req, res) => {
    res.render('msgForm')
  })
  .post((req, res) => {

    res.redirect('/')
  })





module.exports = newRouter
