'use strict'
const url = 'http://localhost:3000';
const addMemeForm = document.querySelector('#addMemeForm');

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
   
   
   
   
   let input = document.getElementById('search');

   input.addEventListener('keyup', event =>{
   let filter = input.value.toUpperCase();
   let ul = document.getElementById("category-list");
   let li = ul.getElementsByTagName('li');
  
    
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  });

  let menu2 = document.getElementById('menu');
  menu2.addEventListener("mouseover", event => {
    let koko = 20 
    let categoryBox = document.getElementById('category') 
    
    categoryBox.style.marginLeft = `${koko}%`;
    categoryBox.style.transitionDuration = "600ms";
    
   });
   menu2.addEventListener("mouseout", event => {
    let koko = 6 
    
    let categoryBox = document.getElementById('category') 
    
    categoryBox.style.marginLeft = `${koko}%`;
    categoryBox.style.transitionDuration = "600ms";
    
   });