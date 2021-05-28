const express = require('express')

const app = express()

app.listen(3000)

app.get('/', (req, res) => {
  //It takes a absolute path so we have to write the root(2nd parameter) along with it to make it able to use relative path
  res.sendFile('./views/index.html', { root: __dirname })
})

app.get('/about', (req, res) => {
  console.log('ting')
  res.sendFile('./views/about.html', { root: __dirname })
})

//redirects
app.get('/about-us', (req, res) => {
  console.log('ting')
  res.redirect('/about')
})

//404
//app.use is a middleware
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname })
})
