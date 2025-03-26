const images = [

    'https://images.unsplash.com/photo-1511919884226-fd3cad34687c',
    'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf',
    'https://images.unsplash.com/photo-1502877338535-766e1452684a'
];


let currentIndex = 0;
const slider = document.getElementById("slider");
slider.src = images[currentIndex];

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    slider.src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    slider.src = images[currentIndex];
}