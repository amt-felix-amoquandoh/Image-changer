let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


//image changer
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/IMG_2996.jpg') {
      myImage.setAttribute('src','images/IMG_r5235s.jpg');
    } else {
      myImage.setAttribute('src','images/IMG_2996.jpg');
    }
}

//login
function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome back, ' + myName;
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome, ' + storedName;
  }
  
}

myButton.onclick = function() {
  setUserName();
}

// if null username
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome Back, ' + myName;
  }
}

