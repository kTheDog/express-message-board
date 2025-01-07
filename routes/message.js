const {Router} = require('express')


const messageRouter = Router()



messageRouter.get('/:number', (req, res) => {
  console.log(res.locals.message)


  res.render('messagePage', {message: res.locals.message})
})


module.exports = messageRouter
