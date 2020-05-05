'use strict'
const url = 'http://localhost:3000';
let cardHolder = document.getElementById('cards1');
console.log('NYT OLLAAN KATEGORIASSA');
const createMemeCards = (memes) => {
memes.forEach((meme) => {
    // create li with DOM methods
    console.log('NYT OLLAAN LOOPISSA');

    console.log('TÄMÄ ON UUSI: ' +meme);
    let cardDiv = document.createElement('div');
    let cardImage = document.createElement('div');
    let image = document.createElement('img');
    let cardContent = document.createElement('div');
    let title = document.createElement('p');
    let cardInfo = document.createElement('div');
    let title2 = document.createElement('p');
    let like = document.createElement('p');

    image.src = url + '/thumbnails/' + meme.filename;
    image.alt = meme.name;
    image.classList.add('resp');


    if(meme.tag === '2'){
    cardDiv.className = "card";
    cardImage.className = "card-image";
    cardContent.className = "card-content";
    title.className = "card-title";
    cardInfo.className = "card-info";
    like.className = "card-like";
    console.log(cardDiv)
    console.log(cardHolder)
    cardHolder.appendChild(cardDiv)
    cardDiv.appendChild(cardImage);
    cardImage.appendChild(image);
    cardDiv.appendChild(cardContent);
    cardContent.appendChild(title);
    cardContent.appendChild(cardInfo);
    cardInfo.appendChild(title2);
    cardInfo.appendChild(like);


    title.innerHTML = meme.name;
    //title2.innerHTML = user.name;
    }
})};

const getMeme = async () => {
    try {
      const response = await fetch(url + '/meme');
      const memes = await response.json();
      createMemeCards(memes);
    }
    catch (e) {
      console.log(e.message);
    }
  };
  getMeme();