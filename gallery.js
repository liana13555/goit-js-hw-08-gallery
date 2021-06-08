import pictures from '/gallery-items.js';

// console.log(pictures);

// const picture = {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
//     description: 'Hokkaido Flower',
// },
  
const galleryContainer = document.querySelector('.js-gallery');
const cardsMarkup = makePictureCardMarkup(pictures);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function makePictureCardMarkup(pictures) {
    return pictures.map(({ preview, original, description }) => {
        return `
   <li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"  
  >
    <img
      class="gallery__image"
      src="${preview}" 
      data-source="${original}" 
      alt="${description}" 
    />
  </a>
</li>
    `;
    }).join('');
    
}