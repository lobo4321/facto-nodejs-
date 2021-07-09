  const news = [{
    id: 1,
    title: 'Pequenos negócios geraram 70% dos empregos com carteira assinada no país',
    author: 'Exame',
    img: 'img/exame-1.jpeg',
    authorimg: 'img/exame-logo.jpeg',
    link: 'https://exame.com/pme/pequenos-negocios-geracao-de-empregos/',
},
{
    id: 2,
    title: 'Mais de 10 empresas abrem vagas de emprego e estágio; veja lista',
    author: 'G1',
    img: 'img/g1-1.png',
    authorimg: 'img/g1-logo.png',
    link: 'https://g1.globo.com/economia/concursos-e-emprego/noticia/2021/07/01/mais-de-10-empresas-abrem-vagas-de-emprego-e-estagio-veja-lista.ghtml',
},
{
    id: 3,
    title: 'Paulo Guedes confirma dois novos programas para recuperação de empregos',
    author: 'Veja',
    img: 'img/veja-1.png',
    authorimg: 'img/veja-logo.png',
    link: 'https://veja.abril.com.br/economia/paulo-guedes-anuncia-dois-novos-programas-para-recuperacao-de-empregos/',
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

        DOM.newsContainer.appendChild(div);
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
            <h4 style="text-transform: none" class= 'newsTitle'>
              ${news.title}
            </h4>
            <div class="articles_grid_author">
              <div class="articles_grid_author_img">
                <img src="${news.authorimg}" class="img-fluid" alt=""  style='object-fit: cover'/>
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


