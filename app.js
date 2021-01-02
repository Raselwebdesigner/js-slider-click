const slider = document.querySelector(".slider");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
var count = 0;

const images = ['img/bg1.jpg', 'img/bg2.jpg', 'img/bg3.jpg', 'img/bg4.jpg', 'img/bg5.jpg'];

function prevslide() {
	count--;

	if (count < 0) {
		count = images.length - 1;
		slider.src = images[count];
	} else {
		slider.src = images[count];
	}
}

function nextslide() {
	count++;

	if (count >= images.length) {
		count = 0;
		slider.src = images[count];
	} else {
		slider.src = images[count];
	}
}

prev.addEventListener('click', function () {
	prevslide();
});

next.addEventListener('click', function () {
	nextslide();
});
