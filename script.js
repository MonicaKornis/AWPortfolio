let objectIds = [];
let images = [];

fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=book')
.then(res => res.json())
.then(json => {
  for (var i = 0; i < 1; i++) {
    let num = Math.ceil(Math.random() * 1000);
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${num}`)
    .then(res => res.json())
    .then(json => {
      if(json.primaryImageSmall !== '' || json.primaryImageSmall === undefined){
          images.push(json.primaryImageSmall)
      }
    }).then(addImageElements);
  }
});

function addToggle() {
  let modeToggleButton = document.getElementById('mode-toggle');

  modeToggleButton.addEventListener('click', () => {
    console.log('hi');
    if(modeToggleButton.innerHTML == 'Dark Mode: Off') {
      let body = document.querySelector('body');
      let nav = document.getElementById('top-nav');
      let menu = document.getElementById('side-menu');
      let button = document.getElementById('bub-studio');
      nav.style.borderColor = '#95ACFF';
      menu.style.borderColor = '#95ACFF';
      body.style.backgroundColor = 'black';
      body.style.color = '#95ACFF';
      button.style.borderColor = '#95ACFF';
      modeToggleButton.innerHTML = 'Dark Mode: On';
    } else {
      let body = document.querySelector('body');
      let nav = document.getElementById('top-nav');
      let menu = document.getElementById('side-menu');
      let button = document.getElementById('bub-studio');
      nav.style.borderColor = '#db0000';
      menu.style.borderColor = '#db0000';
      body.style.backgroundColor = 'white';
      body.style.color = '#db0000';
      button.style.borderColor = '#db0000';
      modeToggleButton.innerHTML = 'Dark Mode: Off';
    }

  });
}


function addImageElements() {
  let parent = document.getElementById('flex-container');

  images.forEach(img => {
    let imageContainer = document.createElement('div');
    let image1 = document.createElement('img');
    imageContainer.className = 'image-container';
    image.className = 'object-image';
    image.src = img;
    image.loading = 'lazy';
    parent.appendChild(imageContainer);
    imageContainer.appendChild(image);
  })
}


document.addEventListener('DOMContentLoaded', addToggle, false);
