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

app.get('/', (req,res) => {
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
app.get('/news', (req,res) => {
    res.render('news')
})
app.get('/blog', (req,res) => {
    res.render('blog')
})
app.get('/blog-detail', (req,res) => {
    res.render('blog-detail')
})
app.get('/courses_todos', (req,res) => {
    res.render('courses_all')
})
app.get('/courses_barbeiro', (req,res) => {
    res.render('courses_barbeiro')
})


//Listen on port 5000
app.listen(port, () => console.log(`Listening on port ${port}`))


