const form = document.getElementById('form')
const name = document.getElementById('fname')
const email = document.getElementById('femail')
const subject = document.getElementById('fsubject')
const message = document.getElementById('fmessage')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    const nameValue = name.value 
    const emailValue = email.value 
    const subjectValue = subject.value 
    const messageValue = message.value 


    if(nameValue === '') {

        setErrorFor(name);
    } else {
        setSuccessFor(name)
    }

    if(emailValue === ''){
        setErrorFor(email)
    } else if(!isEmail(emailValue)){
        setErrorFor(email)
    } else {
        setSuccessFor(email)
    }

    if(subjectValue === ''){
        setErrorFor(subject)
    } else {
        setSuccessFor(subject)
    }

    if(messageValue === ''){
        setErrorFor(message)
     } else {
         setSuccessFor(message)
     }
}


function setErrorFor (input){

   const formControl = input;

   formControl.className = 'form-control simple offline'
}

function setSuccessFor (input){

   const formControl = input;

   formControl.className = 'form-control simple online'
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};

