//change color tag 

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const queryTag = params?.q


let tagButtons = document.querySelectorAll('.tag');
let courses = document.querySelectorAll('.courses');
console.log(courses)



tagButtons.forEach(button => {
  button.addEventListener('click', () => changeTagColor(button))

  if (button.id === queryTag) {
    button.classList.add('blue')
    filterCourses(queryTag)

  }
})

function filterCourses(actualCourse) {
  courses.forEach(course => {
    if (course.classList.contains(actualCourse) || actualCourse === '') {
      course.classList.remove('hide')
      return
    }
    course.classList.add('hide')

  })
}

function changeTagColor(button) {
  tagButtons.forEach(btn => {
    if (btn === button) {
      btn.classList.add('blue')
      filterCourses(btn.id)
      let searchParams = new URLSearchParams(window.location.search);
      searchParams.set("q", btn.id);
      window.location.search = searchParams.toString()
      return
    }
    btn.classList.remove('blue')
  })
}

//count courses and add InnerHtml


let countCourses = document.getElementById('countCourses')
let coursesNotHide = document.querySelectorAll('div:not(.hide).courses')


countCourses.innerHTML = coursesNotHide.length



// courses.map(course => {
//   console.log(course.length)
// })


// Usar como base para as URL



// 
