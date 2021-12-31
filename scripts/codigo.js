let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Introduzca su nombre');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Amazon prime donde el corazón exprime sensaciones, 
    ' + myName;
  }
}

if(! localStorage.getItem('name')) {
  setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Amazon prime donde el corazón exprime sensaciones,  
    ' + storedName;
  }

myButton.onclick = function() {
  setUserName();
}
