import './style.scss'

const sliders = document.querySelectorAll('input[type="range"]');
const image = document.querySelector('.image');
const output = document.getElementById('radius_output');
const copy = document.getElementById('copy');


function setOutput(el) {
	if (el.classList.contains('top_left')) {
		image.style.borderTopLeftRadius = el.value + '%';
	}
	if (el.classList.contains('top_right')) {
		image.style.borderTopRightRadius = el.value + '%';
	}
	if (el.classList.contains('bottom_right')) {
		image.style.borderBottomRightRadius = el.value + '%';
	}
	if (el.classList.contains('bottom_left')) {
		image.style.borderBottomLeftRadius = el.value + '%';
	}

	return getOutput();
}

function getOutput() {
	const top_left = document.querySelector('.top_left');
	const top_right = document.querySelector('.top_right');
	const bottom_right = document.querySelector('.bottom_right');
	const bottom_left = document.querySelector('.bottom_left');

	copy.innerText = 'Copy';

	return output.setAttribute('value', `${top_left.value}% ${top_right.value}% ${bottom_right.value}% ${bottom_left.value}%`);
}


sliders.forEach((el) => el.oninput = () => setOutput(el));

copy.onclick = (el) => {
	navigator.clipboard.writeText(output.value);
	copy.innerText = 'Copied';
}

window.onload = () => sliders.forEach(el => el.value = 0);