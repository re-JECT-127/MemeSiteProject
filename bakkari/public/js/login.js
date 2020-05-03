'use strict'
const url = 'http://localhost:3000';
const addUserForm = document.querySelector('#addUserForm');

const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
  };
  
  const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
  const bodyClass = document.body.classList;
  bodyClass.add(theme);
  
  function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
  
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
  }
  
  document.getElementById('themeButton').onclick = toggleTheme;
  let log = document.getElementById('loggaus')
  log.addEventListener('click', event =>  {
    let loginbox = document.querySelector('.login-box');
    let registerbox = document.querySelector('.register-box');
   if(loginbox.style.display = "block"){
     registerbox.style.display = "none";
   }

});


  let reg = document.getElementById('reg')
  reg.addEventListener('click', event =>  {
    let loginbox = document.querySelector('.login-box');
    let registerbox = document.querySelector('.register-box');
    if(registerbox.style.display = "block"){
    loginbox.style.display = "none";
    }
   else{
    loginbox.style.display = "block";
   }
});


let menu = document.getElementById('menu'); //THIS GIVES ERROR, BUT REGISTER  DOES NOT WORK WITHOUT:DD 
  menu.addEventListener("mouseover", event => { //also this does nothing
    let koko = 200 
    console.log("paska")
    let paska = document.getElementById('paska') 
    
    paska.style.marginLeft = `${koko}px`;
    paska.style.transitionDuration = "600ms";
    
   });


   addUserForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const fd = new FormData(addUserForm);
    const fetchOptions = {
      method: 'POST',
      body: fd,
    };
    const response = await fetch(url + '/user', fetchOptions);
    const json = await response.json();
    console.log('add response', json);
  });
