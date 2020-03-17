const img = 'http://placehold.it/300x300';
let emptyImg = '';

if(emptyImg === undefined || emptyImg === '') {
  const emptyBox = document.querySelector('.empty');
  const newImg = document.createElement('img');
  newImg.src = img;
  emptyBox.appendChild(newImg);
} else {
  const emptyBox = document.querySelector('.username');
  const newImg = document.createElement('img');
  newImg.src = emptyImg;
  emptyBox.appendChild(newImg);
}