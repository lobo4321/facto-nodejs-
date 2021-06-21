const blogs = [
{
id:1,
img: './img/blogImage.png',
title: 'Prestação de Serviço',
author: 'Guga o Brabo',
link: '/blog-detail',
authorimg: 'https://via.placeholder.com/500x500',
},
{
id:2,
img: './img/blogImage.png',
title: 'Prestação de Serviço',
author: 'Joao Lobo o Brabo',
link: '/blog-detail',
authorimg: 'https://via.placeholder.com/500x500',
},
{
id:3,
img: './img/blogImage.png',
title: 'Prestação de Serviço',
author: 'O Brabo',
link: '/blog-detail',
authorimg: 'https://via.placeholder.com/500x500',
},


]

const DOM = {
   blogsContainer: document.querySelector('#data-blogs'),

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
