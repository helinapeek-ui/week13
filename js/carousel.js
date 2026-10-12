
const images = [
    "images/CV-Pilt.png",
    "images/cvpilt2.png"
];

let currentImage = 0;

const carouselImage = document.getElementById("carousel-image");

carouselImage.addEventListener("click", function () {
    currentImage = (currentImage + 1) % images.length;
    carouselImage.src = images[currentImage];
});
