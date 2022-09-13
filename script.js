let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let h3 = document.querySelector('h3');
let body = document.querySelector('body');

function changeColor() {
	// h3.textContent = color1.value + ' ' + color2.value;
	body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
	h3.textContent = body.style.background;
}

color1.addEventListener('input', changeColor);

color2.addEventListener('input', changeColor);