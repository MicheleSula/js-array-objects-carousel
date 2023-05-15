// Array images
// const images = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\\s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\\s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Images
const imagesPaths = images.map(path => path.image);
// Subtitles
const textArray = images.map(paragraphText => paragraphText.text);
// Titles
const titleArray = images.map(titleText => titleText.title);


// Current element index
let currentImageIndex = 0;

// Containers and next/prev buttons
const container = document.querySelector('.container');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const thumbnailsContainer = document.querySelector('.thumbnails');

/*
// Titles
for (let i = 0; i < titleArray.length; i++) {
  
    // Create image
    const titleText = document.createElement('h1');
    // Setting img source and adding class
    titleText.innerHTML = titleArray[i];
    titleText.classList.add("visible");
    titleText.classList.add("position-absolute-2");

    if (i !== currentImageIndex) {
        titleText.classList.add("hidden");
        titleText.classList.remove("visible");
    }
    // Output
    container.appendChild(titleText);
}

// Subtitles
for (let i = 0; i < textArray.length; i++) {
  
    // Create image
    const paragraphText = document.createElement('h2');
    // Setting img source and adding class
    paragraphText.innerHTML = textArray[i];
    paragraphText.classList.add("visible");
    paragraphText.classList.add("position-absolute");

    if (i !== currentImageIndex) {
        paragraphText.classList.add("hidden");
        paragraphText.classList.remove("visible");
    }
    // Output
    container.appendChild(paragraphText);
}
*/

// Images
for (let i = 0; i < imagesPaths.length; i++) {
  
    // Create image
    const img = document.createElement('img');
    // Setting img source and adding class
    img.src = imagesPaths[i];
    img.classList.add("visible");

    if (i !== currentImageIndex) {
        img.classList.add("hidden");
        img.classList.remove("visible");
    }
    // Output
    container.appendChild(img);

    
    // Creating thumbnail img
    const thumbnail = document.createElement('img');
    // Setting img source and class
    thumbnail.src = imagesPaths[i];
    thumbnail.classList.add('thumbnail-opacity');

    if (i === currentImageIndex) {
        thumbnail.classList.add('active-thumbnail');
    }
    // Output
    thumbnailsContainer.appendChild(thumbnail);
}

prevButton.addEventListener('click', () => {
    currentImageIndex = updateSlide(container, thumbnailsContainer, imagesPaths, currentImageIndex, -1);
});

nextButton.addEventListener('click', () => {
    currentImageIndex = updateSlide(container, thumbnailsContainer, imagesPaths, currentImageIndex, 1);
});

// Funzioni

function updateSlide(container, thumbnailsContainer, imagesPaths, currentImageIndex, direction) {
    container.children[currentImageIndex].classList.add("hidden");
    container.children[currentImageIndex].classList.remove("visible");
    thumbnailsContainer.children[currentImageIndex].classList.remove('active-thumbnail');

    currentImageIndex = (currentImageIndex + direction + imagesPaths.length) % imagesPaths.length;

    container.children[currentImageIndex].classList.remove("hidden");
    container.children[currentImageIndex].classList.add("visible");
    thumbnailsContainer.children[currentImageIndex].classList.add('active-thumbnail');

    return currentImageIndex;
}