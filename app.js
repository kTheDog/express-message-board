const express = require('express')

const app = express()

const port = 8080

let msgID = 2

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))
let messages = [
  {
    text: "Hi there!",user: "Amando",added: new Date(), id: 1,
  },
  {text: "Hello World!",user: "Charles",added: new Date(), id: 0
  }
];

function appendToMessages (req, res, next) {
  let msg = {
    user: req.body.username,
    text: req.body.message,
    added: new Date(),
    id: msgID
  }
  msgID += 1
  messages.unshift(msg)
  next()
}

function sendMsgData (req, res, next) {
  let msgID = req.params.number

  let msg = messages.find(msg => msg.id == msgID)

  res.locals.message = msg
  console.log(messages[msgID], msgID)
  next()
}

const newmsgRouter = require('./routes/new')
const msgRouter = require('./routes/message')

app.post('/new',appendToMessages)
app.get('/messages/:number', sendMsgData)

app.use('/new', newmsgRouter)
app.use('/messages', msgRouter)


app.get('/', (req, res) => {
  res.render('index', {messages})
})



app.listen(port)
