//imports

const express = require('express')
const app = express()
const port = 5000


//Static Files

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

//Set views

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/index', (req,res) => {
    res.render('index')
})

app.get('/courses', (req,res) => {
    res.render('courses')
})
app.get('/contact', (req,res) => {
    res.render('contact')
})
app.get('/privacy', (req,res) => {
    res.render('privacy')
})


//Listen on port 5000
app.listen(port, () => console.log(`Listening on port ${port}`))


