let objectIds = [];
let images = [];

fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=red')
.then(res => res.json())
.then(json => {
  for (var i = 0; i < 3; i++) {
    let num = Math.ceil(Math.random() * 10000);
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${num}`)
    .then(res => res.json())
    .then(json => {
      if(json.primaryImageSmall !== '' || json.primaryImageSmall !== undefined || json.primaryImageSmall !== unknown){
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
      body.style.backgroundColor = 'black';
      body.style.color = '#95ACFF';
      modeToggleButton.innerHTML = 'Dark Mode: On';
    } else {
      let body = document.querySelector('body');
      body.style.backgroundColor = '#FFFCF0';
      body.style.color = '#db0000';
      modeToggleButton.innerHTML = 'Dark Mode: Off';
    }
  });
}


function addImageElements() {
  let parent = document.getElementById('flex-container');
  let sideBarImg = document.getElementById('bio-image');
  let imageSidebarSrc = images.pop();
  sideBarImg.src = imageSidebarSrc;

  images.forEach(img => {
    let imageContainer = document.createElement('div');
    let image1 = document.createElement('img');
    imageContainer.className = 'image-container';
    image1.className = 'object-image';
    image1.src = img;
    image1.loading = 'lazy';
    parent.appendChild(imageContainer);
    imageContainer.appendChild(image1);
    debugger
  })
}


document.addEventListener('DOMContentLoaded', addToggle, false);
