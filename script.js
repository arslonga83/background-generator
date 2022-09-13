let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let h3 = document.querySelector('h3');
let body = document.querySelector('body');
let button = document.querySelector('button');

function changeColor() {
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	h3.textContent = body.style.background;
}

function randomColor() {
	let color = Math.floor(Math.random() * 2 ** 24).toString(16).padStart(6, '0');
	return color;
}

window.onload = changeColor();

color1.addEventListener('input', changeColor);

color2.addEventListener('input', changeColor);

button.addEventListener('click', () => {
	color1.value = `#${randomColor()}`;
	color2.value = `#${randomColor()}`;
	changeColor();
})