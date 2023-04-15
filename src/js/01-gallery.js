// Module with Babel tranformation
import SimpleLightbox from 'simplelightbox';
// Plain ES Module without Babel
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// console.log(galleryItems);

// Створення і рендер розмітки на підставі масиву даних galleryItems
const galleryListEl = document.querySelector('.gallery');
galleryListEl.insertAdjacentHTML('beforeend', createGalleryItem(galleryItems));

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<a class="gallery__item" href='${original}'>
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`
    )
    
    .join('');
}

// Ініціалізація бібліотеки SimpleLightbox
const slideOriginalImg = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});













