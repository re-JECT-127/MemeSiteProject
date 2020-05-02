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
 

// addMemeForm.addEventListener('submit', async (evt) => {
//   evt.preventDefault();
//   const fd = new FormData(addMemeForm);
//   const fetchOptions = {
//     method: 'POST',
//     body: fd,
//   };
//   const response = await fetch(url + '/meme', fetchOptions);
//   const json = await response.json();
//   console.log('add response', json);
//   getMeme();
// });

let menu = document.getElementById('menu');
  menu.addEventListener("mouseover", event => {
    let koko = 200 
    let paska = document.getElementById('card-holder') 
    
    paska.style.marginLeft = `${koko}px`;
    paska.style.transitionDuration = "600ms";
    
   });
   menu.addEventListener("mouseout", event => {
    let koko = -0 
    
    let paska = document.getElementById('card-holder') 
    
    paska.style.marginLeft = `${koko}px`;
    paska.style.transitionDuration = "600ms";
    
   });
    let cardHolder = document.getElementById('cards')
   function createCard (){
    let cardDiv = document.createElement('div');
    let cardImage = document.createElement('div');
    let image = document.createElement('img');
    let cardContent = document.createElement('div');
    let title = document.createElement('p');
    let cardInfo = document.createElement('div');
    let title2 = document.createElement('p');
    let like = document.createElement('p');

    cardDiv.className = "card";
    cardImage.className = "card-image";
    cardContent.className = "card-content";
    title.className = "card-title";
    cardInfo.className = "card-info";
    like.className = "card-like";

    cardHolder.appendChild(cardDiv);
    cardDiv.appendChild(cardImage);
    cardImage.appendChild(image);
    cardDiv.appendChild(cardContent);
    cardContent.appendChild(title);
    cardContent.appendChild(cardInfo);
    cardInfo.appendChild(title2);
    cardInfo.appendChild(like);

    console.log("toimiiko")

   };






  