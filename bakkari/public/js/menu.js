'use strict'
const url = 'http://10.114.34.44/app/';
const addMemeForm = document.querySelector('#addMemeForm');
const tagLists = document.querySelectorAll('.add-tag');


const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
  };
  let tmp = 0;
  const theme = localStorage.getItem('theme')
    ||  (tmp = Object.keys(themeMap)[0],
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
    let koko = 20 
    let paska = document.getElementById('card-holder') 
    
    paska.style.marginLeft = `${koko}%`;
    paska.style.transitionDuration = "600ms";
    
   });
   menu.addEventListener("mouseout", event => {
    let koko = 0 
    
    let paska = document.getElementById('card-holder') 
    
    paska.style.marginLeft = `${koko}%`;
    paska.style.transitionDuration = "600ms";
    
   });
   
