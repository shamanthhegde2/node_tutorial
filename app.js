const express = require('express')
const app = express()
const mongoose = require('mongoose')

const blogRoutes = require('./routes/blogRoutes')
const dbURI =
  'mongodb+srv://shamanth2:Vivekananda2@cluster0.nh8pw.mongodb.net/node-tuts?retryWrites=true&w=majority'

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('database connected')
  })
  .catch((err) => {
    console.log(err)
  })
const morgan = require('morgan')
const { result } = require('lodash')

app.set('view engine', 'ejs')

app.listen(3001)

//to make files public tp the browser we specify the folder here which makes it available in the root so no need to give path
app.use(express.static('public'))

//to encode post request values in side req we have to add this
app.use(express.urlencoded({ extended: true }))

//it is used to output the status of the req refer morgan doc in npm package to learn more
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.redirect('/blogs')
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' })
})
//blogRoutes
app.use('/blogs', blogRoutes)

//404
//app.use is a middleware which run between each req and res
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page not found' })
})
