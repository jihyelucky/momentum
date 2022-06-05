const images = ["back01.jpg","back02.jpg","back03.jpg"];

const chosenImg = images[Math.floor(Math.random() * images.length)];
const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImg}`;

document.body.appendChild(bgImg);