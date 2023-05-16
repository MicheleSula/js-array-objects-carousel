
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\\s Spiderman Miles Morale',
        subTitle: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        subTitle: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        subTitle: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        subTitle: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        subTitle: 'Marvel\\s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const container = document.querySelector('.container');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const thumbnailsContainer = document.querySelector('.thumbnails-container');

let currentSlide = 0;

const updateSlide = () => {
    // Check e update sulla slide
    container.querySelectorAll('.slide').forEach((slide, index) => {
        if (index === currentSlide) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
    // Check e update sul thumbnail
    thumbnailsContainer.querySelectorAll('.thumbnail').forEach((thumbnail, index) => {
        if (index === currentSlide) {
            thumbnail.classList.add('active');
        } else {
            thumbnail.classList.remove('active');
        }
    });
};

prevButton.addEventListener('click', () => {
    currentSlide -= 1;
    if (currentSlide < 0) {
        currentSlide = images.length - 1;
    }
    updateSlide();
});

nextButton.addEventListener('click', () => {
    currentSlide += 1;
    if (currentSlide >= images.length) {
        currentSlide = 0;
    }
    updateSlide();
});

images.forEach((image) => {
    // Creazione dell'elemento slide
    const slide = document.createElement('div');
    slide.className = 'slide';

    // Creazione dell'immagine
    createElementFromArray('img', 'slide-img', null, image.image, slide);
    // Creazione del titolo
    createElementFromArray('h2', 'slide-title', image.title, null, slide);
    // Creazione del sottotitolo
    createElementFromArray('p', 'slide-subtitle', image.subTitle, null, slide);
    

    container.appendChild(slide);

    const thumbnail = document.createElement('img');
    thumbnail.className = 'thumbnail';
    thumbnail.src = image.image;
    thumbnailsContainer.appendChild(thumbnail);

    thumbnail.addEventListener('click', () => {
        currentSlide = images.indexOf(image);
        updateSlide();
    });
});

updateSlide();


// Funzioni

function createElementFromArray(tag, className, textContent, imageContent, parent) {
    const element = document.createElement(tag);
    element.className = className;
    element.textContent = textContent;
    element.src = imageContent;
    parent.appendChild(element);
  }