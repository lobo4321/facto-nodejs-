const blogs = [
{
id:1,
img: './img/blog-maisProcuradas.jpeg',
title: 'Quais as áreas de prestação de serviço são as mais procuradas',
author: 'Gustavo Moreschi',
link: '/blog-maisProcuradas',
authorimg: './img/guga.png',
},
{
id:2,
img: './img/blog-vantagensPrestador.png',
title: ' 5 vantagens em ser um prestador de serviço',
author: 'Joao Lobo ',
link: '/blog-vantagensPrestador',
authorimg: './img/lobo.png',
},
{
id:3,
img: './img/blog-mei.png',
title: 'Tudo o que você precisa saber sobre MEI',
author: 'João Lobo',
link: '/blog-mei',
authorimg: './img/lobo.png',
},


]

const DOM = {
   blogsContainer: document.querySelector('#data-blog-index'),

    addBlogs(blogs, index){
    
    let div = document.createElement('div')
    div.classList.add('col-lg-4')
    div.classList.add('col-md-4')
    div.classList.add('col-sm-12')
    div.innerHTML = DOM.innerHTMLBlogs(blogs)

    DOM.blogsContainer.appendChild(div)


    },
    innerHTMLBlogs(blogs){
        const html = `
        
        
              <div class="articles_grid_style">
                <div class="articles_grid_thumb">
                  <a href="${blogs.link}"
                    ><img
                    style='object-fit: cover;width:  700px;
              height: 250px;'
                      src="${blogs.img}"
                      class="img-fluid"
                      alt=""
                  /></a>
                </div>

                <div class="articles_grid_caption">
                  <h4>${blogs.title}</h4>
                  <div class="articles_grid_author">
                    <div class="articles_grid_author_img">
                      <img
                        src="${blogs.authorimg}"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <h4>${blogs.author}</h4>
                  </div>
                
              </div>
            </div>
            
        `
        return html
    }
}

blogs.forEach(function(blogs){
    DOM.addBlogs(blogs)
})
