//imports

const express = require('express')
const app = express()
const port = 5000

//prismic

const Prismic = require('@prismicio/client');
var PrismicDOM = require('prismic-dom');

var apiEndpoint = 'https://feira.cdn.prismic.io/api/v2';

// Link Resolver
function linkResolver(doc) {
  
    // Define the url depending on the document type
    if (doc.type === 'page') {
      return '/page/' + doc.uid;
    } else if (doc.type === 'blog_post') {
      return '/blog/' + doc.uid;
    }
    
    // Default to homepage
    return '/';
  }



// Middleware to inject prismic context
app.use(function(req, res, next) {
  res.locals.ctx = {
    endpoint: apiEndpoint,
    linkResolver: linkResolver,
  };
  // add PrismicDOM in locals to access them in templates.
  res.locals.PrismicDOM = PrismicDOM;
  next();
});



// Initialize the prismic.io api
function initApi(req) {
  return Prismic.getApi(apiEndpoint, {
    req: req, 
    accessToken: 'MC5ZTjQtUVJFQUFDa0F2dDUt.L--_vVXvv71Z77-9Ru-_vRjvv71I77-977-977-977-9N28iY--_vRTvv71V77-977-9PlLvv73vv70NJyc',
  });
}



// Homepage Route
app.get('/prismic', function (req, res) {	
  initApi(req).then(function(api) {
    api.query(
      Prismic.Predicates.at('document.type', 'feira_blog')
    ).then(function(response) {
      // response is the response object. Render your views here.
      console.log(JSON.stringify(response,null,2))
      res.render('prismic', { document: response.results[0] });
    });
  });
});



//Static Files
app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

//Set views


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
// app.get('/courses_todos', (req,res) => {
//     res.render('courses_all')
// })
// app.get('/courses_barbeiro', (req,res) => {
//     res.render('courses_barbeiro')
// })
app.get('/blog-maisProcuradas', (req,res) => {
  res.render('blog-maisProcuradas')
})
app.get('/blog-vantagensPrestador', (req,res) => {
  res.render('blog-vantagensPrestador')
})
app.get('/blog-mei', (req,res) => {
  res.render('blog-mei')
})


//Listen on port 5000
app.listen(port, () => console.log(`Listening on port ${port}`))


