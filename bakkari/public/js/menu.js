'use strict'
const url = 'http://localhost:3000';
const addMemeForm = document.querySelector('#addMemeForm');

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

  let menu = document.getElementById('menu');
  menu.addEventListener("mouseover", event => {
    let koko = 200 
    console.log("paska")
    let paska = document.getElementById('paska') 
    
    paska.style.marginLeft = `${koko}px`;
    paska.style.transitionDuration = "600ms";
    
   });
   menu.addEventListener("mouseout", event => {
    let koko = -0 
    console.log("paska")
    let paska = document.getElementById('paska') 
    
    paska.style.marginLeft = `${koko}px`;
    paska.style.transitionDuration = "600ms";
    
   });

   addMemeForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const fd = new FormData(addMemeForm);
    const fetchOptions = {
      method: 'POST',
      body: fd,
    };
    const response = await fetch(url + '/meme', fetchOptions);
    const json = await response.json();
    console.log('add response', json);
    getMeme();
  });

