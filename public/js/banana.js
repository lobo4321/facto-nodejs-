
let btnTagAll = document.querySelector('#alltags');
let btnTagBarber = document.querySelector('#tagBarber');
let btnTagCabeil = document.querySelector('#tagHaircut');
let btnTagDesigner = document.querySelector('#tagDesignCilios');
let btnTagManicure = document.querySelector('#tagManicure');
let btnTagMaquiador = document.querySelector('#tagMaquiador');
let btnTagTatuador = document.querySelector('#tagTatuador');

btnTagAll.addEventListener('click', () => btnTagAll.classList.add('blue'))
btnTagBarber.addEventListener('click', () => btnTagBarber.classList.add('blue'))
btnTagCabeil.addEventListener('click', () => btnTagCabeil.classList.add('blue'))
btnTagDesigner.addEventListener('click', () => btnTagDesigner.classList.add('blue'))
btnTagManicure.addEventListener('click', () => btnTagManicure.classList.add('blue'))
btnTagMaquiador.addEventListener('click', () => btnTagMaquiador.classList.add('blue'))
btnTagTatuador.addEventListener('click', () => btnTagTatuador.classList.add('blue'))

if(btnTagAll.classList.contains('blue') === true){
  btnTagBarber.classList.remove('blue')
  btnTagCabeil.classList.remove('blue')
  btnTagDesigner.classList.remove('blue')
  btnTagManicure.classList.remove('blue')
  btnTagMaquiador.classList.remove('blue')
  btnTagTatuador.classList.remove('blue')
}

if(btnTagBarber.classList.contains('blue') === true){
  btnTagAll.classList.remove('blue')
  btnTagCabeil.classList.remove('blue')
  btnTagDesigner.classList.remove('blue')
  btnTagManicure.classList.remove('blue')
  btnTagMaquiador.classList.remove('blue')
  btnTagTatuador.classList.remove('blue')
}

if(btnTagCabeil.classList.contains('blue') === true){
  btnTagAll.classList.remove('blue')
  btnTagBarber.classList.remove('blue')
  btnTagDesigner.classList.remove('blue')
  btnTagManicure.classList.remove('blue')
  btnTagMaquiador.classList.remove('blue')
  btnTagTatuador.classList.remove('blue')
}

if(btnTagDesigner.classList.contains('blue') === true){
  btnTagAll.classList.remove('blue')
  btnTagBarber.classList.remove('blue')
  btnTagCabeil.classList.remove('blue')
  btnTagManicure.classList.remove('blue')
  btnTagMaquiador.classList.remove('blue')
  btnTagTatuador.classList.remove('blue')
}

if(btnTagManicure.classList.contains('blue') === true){
  btnTagAll.classList.remove('blue')
  btnTagBarber.classList.remove('blue')
  btnTagCabeil.classList.remove('blue')
  btnTagDesigner.classList.remove('blue')
  btnTagMaquiador.classList.remove('blue')
  btnTagTatuador.classList.remove('blue')
}

if(btnTagMaquiador.classList.contains('blue') === true){
  btnTagAll.classList.remove('.blue')
  btnTagBarber.classList.remove('.blue')
  btnTagCabeil.classList.remove('.blue')
  btnTagDesigner.classList.remove('.blue')
  btnTagManicure.classList.remove('.blue')
  btnTagTatuador.classList.remove('.blue')
}

if(btnTagTatuador.classList.contains('blue') === true){
  btnTagAll.classList.remove('.blue')
  btnTagBarber.classList.remove('.blue')
  btnTagCabeil.classList.remove('.blue')
  btnTagDesigner.classList.remove('.blue')
  btnTagManicure.classList.remove('.blue')
  btnTagMaquiador.classList.remove('.blue')
}