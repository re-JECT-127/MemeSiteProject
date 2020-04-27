'use strict';
const url = 'http://localhost:3000'; // change url when uploading to server

const ul = document.querySelector('ul');

const getMeme = async () => {
  const response = await fetch(url + '/meme');
  const memes = await response.json();
  for (const meme of memes) {
  //  const user = await getUser(cat.owner);
    ul.innerHTML += `
    <li>
        <h2>${meme.name}</h2>
        <figure>
            <img src="${meme.filename}" class="resp">
        </figure>
    
    </li>
    `;
  }
};
/*
const getUser = async (id) => {
  const response = await fetch(url + '/user/' + id);
  const user = await response.json();
  return user;
};
*/
getCat();
