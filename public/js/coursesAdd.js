const coursesEd = [
    {
    id: 1,
    title: 'Curso de barbeiro gratuito com certificado',
    class: 'barbeiro',
    description: 'Algumas dicas para ajudar a destacar o seu negócio no mercado das barbearias',
    img: 'img/pingpongNews.jpeg',
    author: 'Canal Diego Beneciutti',
    link: 'https://www.youtube.com/watch?v=QanXk-GtWqk&list=PLvXERW-aO61pSON0tzSYnEEKWS6sQ7ndL',
    authorimg: 'img/logoGlobo.png',
    duration: '5h',
},
    {
    id: 2,
    title: 'Curso de barbeiro Grátis - Corte Undercut',
    class: 'barbeiro',
    description: 'Curso de Corte Undercut com o professor Jefferson Silva',
    img: 'img/pingpongNews.jpeg',
    author: "Canal Alfa Look's",
    link: 'https://www.youtube.com/watch?v=u4jAcwOsSso&list=PL4sEl0WHDQpVAxGqx_o4p39-16WTGX_Sr',
    authorimg: 'img/logoGlobo.png',
    duration: '1h 50min',
},
    {
    id: 3,
    title: 'Curso gratuito para barbeiros - Corte Pompadour',
    class: 'barbeiro',
    description: 'Curso de Corte Pompadour com o professor Jefferson Silva',
    img: 'img/pingpongNews.jpeg',
    author: "Canal Alfa Look's",
    link: 'https://www.youtube.com/watch?v=foNDQ46OR-Q&list=PL4sEl0WHDQpW4636MlT0V6TyNb_t_hoKL',
    authorimg: 'img/logoGlobo.png',
    duration: '30min',
},
]


const DOM = {

  coursesContainer: document.querySelector('#data-courses'),

  addCourses(coursesEd, index){
  let div = document.createElement('div')
  div.classList.add('col-lg-4')
  div.classList.add('col-md-6')
  div.classList.add('filterDiv')
  div.classList.add(`${coursesEd.class}`)
  div.innerHTML = DOM.innerHTMLCourses(coursesEd)

  DOM.coursesContainer.appendChild(div)
  },

    innerHTMLCourses(coursesEd){
        const html = `
       
                  <div class="education_block_grid">
                    <div class="education_block_thumb">
                      <a href="${coursesEd.link}"
                        ><img
                        style='object-fit: cover;width:  700px;
                        height: 250px;'
                          src="${coursesEd.img}"
                          class="img-fluid"
                          alt=""
                      /></a>
                     
                    </div>

                    <div class="education_block_body">
                      <h4 class="bl-title" style='text-transform:none;'>
                        <a href="${coursesEd.link}"
                        target='_blank'
                          >${coursesEd.title}</a
                        >
                      </h4>
                      <p>
                        ${coursesEd.description}
                      </p>
                    </div>

                    <div class="education_block_footer">
                      <div class="education_block_author">
                        <div class="path-img">
                          <a href="instructor-detail.html"
                            ><img
                              src="${coursesEd.authorimg}"
                              class="img-fluid"
                              alt=""
                          /></a>
                        </div>
                        <h5>
                          <a href="instructor-detail.html">${coursesEd.author}</a>
                        </h5>
                      </div>
                      <span class="education_block_time"
                        ><i class="ti-time mr-1"></i>${coursesEd.duration}</span
                      >
                    </div>
                  </div>
                
        `
        return html
    }
}

coursesEd.forEach(function(coursesEd){
  DOM.addCourses(coursesEd)
})

const COUNT = {

  coursesLengthContainer: document.querySelector('#data-courses-length'),

  addCoursesLength(coursesEd, index){
    let div = document.createElement('div')
    div.classList.add('col-lg-6 ')
    div.classList.add('col-md-6')
    div.classList.add('col-sm-12')
    div.setAttribute('id', 'coursesLenght')
    div.innerHTML = DOM.innerHTMLCoursesLength(coursesEd)
  
    DOM.coursesContainer.appendChild(div)
    },

  innerHTMLCoursesLength(){
    const html = `
   
    Encontramos <strong> ${coursesEd.length} </strong> cursos para você

    `

    return html 
  }
}

coursesEd.forEach(function(coursesEd){
  COUNT.addCoursesLength(coursesEd)
})