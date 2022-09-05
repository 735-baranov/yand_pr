const app = require('express')()

const host = '127.0.0.1'
const port = 7000

app.get('/auth', (req, res) => {
  res.status(200).type('text/plain')
  res.send('Auth page')
})

app.get('/chats', (req, res) => {
  res.status(200).type('text/plain')
  res.send('Chats page')
})

app.get('/cur_chat', (req, res) => {
  res.status(200).type('text/plain')
  res.send('Cur chat page')
})

app.get('/profile', (req, res) => {
  res.status(200).type('text/plain')
  res.send('profile page')
})

app.get('/reg', (req, res) => {
    res.status(200).type('text/plain')
    res.send('reg page')
})

app.use((req, res, next) => {
  res.status(404).type('text/plain')
  res.send('_404 page')
})

app.listen(port, host, function () {
  console.log(`Server listens http://${host}:${port}`)
})