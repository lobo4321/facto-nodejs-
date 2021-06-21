filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


//Adicionar o nome do curso pro HTML

const courses = [
  { name: 'Barbeiro'},
  { name: 'Cabelereiro'},
  { name: 'Depilador'},
  { name: 'Designer Cilios'},
  { name: 'Designer Sobrancelhas'},
  { name: 'Esteticista'},
  { name: 'Manicure'},
  { name: 'Maquiador'},
  { name: 'Massagista'},
]

const buttonBarber = document.getElementById('buttonBarber')

function getName() {
  if(buttonBarber.value == courses[0].name){
    return courses[0].name
  }
}
const banana = {
  name: 'banana'
}


//change url

function change_urlAll() {
  history.pushState({}, "", "courses_todos")
}
function change_urlBarber() {
  history.pushState({}, "", "courses_barbeiro")
}
function change_urlCabele() {
  history.pushState({}, "", "courses_cabelereiro")
}
function change_urlDesignerCilios() {
  history.pushState({}, "", "courses_designer_cilios")
}
function change_urlManicure() {
  history.pushState({}, "", "courses_manicure")
}
function change_urlMaquiador() {
  history.pushState({}, "", "courses_maquiador")
}
function change_urlDepilador() {
  history.pushState({}, "", "courses_depilador")
}

//change color tag 

let btnTagAll = document.querySelector('#alltags');

btnTagAll.addEventListener('click', () => btnTagAll.style.backgroundColor = '#278EEE')
btnTagAll.addEventListener('click', () => btnTagAll.style.borderColor = '#278EEE')


let btnTagBarber = document.querySelector('#tagBarber');

btnTagBarber.addEventListener('click', () => btnTagBarber.style.backgroundColor = '#278EEE')
btnTagBarber.addEventListener('click', () => btnTagBarber.style.borderColor = '#278EEE')


function changeButton(){
  if(btnTagBarber.style.backgroundColor == btnTagAll.style.backgroundColor){
    return btnTagBarber.style.backgroundColor = '#808080'
  }
}
