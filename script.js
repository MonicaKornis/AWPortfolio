let objectIds = [];
let images = [];

fetch('https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=book')
.then(res => res.json())
.then(json => {
  for (var i = 0; i < 10; i++) {
    let num = Math.ceil(Math.random() * 1000);
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${num}`)
    .then(res => res.json())
    .then(json => {
      if(json.primaryImage === '' || json.primaryImage === undefined){
        if(json.primaryImageSmall !== '' || undefined ){
          images.push(json.primaryImageSmall)
        }
      } else {
        images.push(json.primaryImage)
      }
      console.log(images)
    }).then(addImageElements);
  }
});




function addImageElements() {
  let parent = document.getElementById('flex-container');
  console.log(parent)
  console.log(images)

  // console.log(id)
  images.forEach(img => {
    console.log(img);
    let imageContainer = document.createElement('div');
    let image = document.createElement('img');
    imageContainer.className = 'image-container';
    image.className = 'object-image';
    image.src = img;
    parent.appendChild(imageContainer);
    imageContainer.appendChild(image);
  })
}


// window.addEventListener("DOMContentLoaded", addImageElements);
