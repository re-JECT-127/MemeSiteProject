'use strict'
const url = 'http://localhost:3000';
// const addMemeForm = document.querySelector('#addMemeForm');
const addUserForm = document.querySelector('#addUserForm');

/*
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
*/

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


function openMenu() {
  let koko = 200 
  document.getElementById('paska').style.marginLeft = `${koko}px`;
  document.getElementById('paska').style.transitionDuration = "600ms";
  
}
function closeMenu() {
  let koko = 200
  
  document.getElementById('paska').style.marginRight = `${koko}px`;
  document.getElementById('paska').style.transitionDuration = "600ms";
  }
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
    
    let paska = document.getElementById('paska') 
    
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





  