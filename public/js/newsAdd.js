const news = [{
    id: 1,
    title: 'Manicure usa a Facto e aumenta sua vendas em 100%',
    author: 'Globo',
    img: 'img/manicureNews.jpeg',
    authorimg: 'img/logoGlobo.png',
    link: 'https://g1.globo.com/sp/santos-regiao/noticia/2021/05/12/manicure-viraliza-ao-produzir-unhas-de-ate-12-cm-com-pedacos-de-dolar-e-imitacao-de-cannabis.ghtml',
},
{
    id: 2,
    title: 'Barbeiro fica com a agenda lotada',
    author: 'New York Times',
    img: 'img/barbeiroNews.png',
    authorimg: 'img/logoGlobo.png',
    link: 'https://g1.globo.com/sp/santos-regiao/noticia/2021/05/12/manicure-viraliza-ao-produzir-unhas-de-ate-12-cm-com-pedacos-de-dolar-e-imitacao-de-cannabis.ghtml',
},
{
    id: 3,
    title: 'Guga toma um pau no ping pong',
    author: 'Ensight',
    img: 'img/pingpongNews.jpeg',
    authorimg: 'img/logoGlobo.png',
    link: 'https://g1.globo.com/sp/santos-regiao/noticia/2021/05/12/manicure-viraliza-ao-produzir-unhas-de-ate-12-cm-com-pedacos-de-dolar-e-imitacao-de-cannabis.ghtml',
},
]

const DOM = {

    newsContainer: document.querySelector('#data-news'),

    addNews(news, index){

        let div = document.createElement('div')
        div.classList.add('col-lg-4')
        div.classList.add('col-md-4')
        div.classList.add('col-sm-12')
        div.innerHTML = DOM.innerHTMLNews(news)

        DOM.newsContainer.appendChild(div)
    },

    innerHTMLNews(news){
        const html = 
        `
        <div class="articles_grid_style">
          <div class="articles_grid_thumb">
            <a
              href="${news.link}"
              target="_blank"
              ><img style='object-fit: cover;width:  700px;
              height: 250px; ' src="${news.img}" class="img-fluid" alt=""
            /></a>
          </div>

          <div class="articles_grid_caption">
            <h4 style="text-transform: none">
              ${news.title}
            </h4>
            <div class="articles_grid_author">
              <div class="articles_grid_author_img">
                <img src="${news.authorimg}" class="img-fluid" alt="" />
              </div>
              <h4>${news.author}</h4>
            </div>
          </div>
        
      </div>`

      return html 
    }
}

news.forEach(function(news){
    DOM.addNews(news)
})