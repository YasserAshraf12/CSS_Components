// DOM Elements
const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const violetButton = document.getElementById('violet');
const greenButton = document.getElementById('green');
const blueButton = document.getElementById('blue');
const body = document.body;

// Apply the cached theme on reload
const theme = localStorage.getItem('theme');

if (theme) {
    body.classList.add(theme);
}

// Button Event Handlers

darkButton.onclick = () => {
    body.classList.remove('light', 'dark', 'green', 'violet', 'blue');
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
};
lightButton.onclick = () => {
    body.classList.remove('light', 'dark', 'green', 'violet', 'blue');
    body.classList.add('light');
    localStorage.setItem('theme', 'light');
};
greenButton.onclick = () => {
    body.classList.remove('light', 'dark', 'green', 'violet', 'blue');
    body.classList.add('green');
    localStorage.setItem('theme', 'green');
};
violetButton.onclick = () => {
    body.classList.remove('light', 'dark', 'green', 'violet', 'blue');
    body.classList.add('violet');
    localStorage.setItem('theme', 'violet');
};
blueButton.onclick = () => {
    body.classList.remove('light', 'dark', 'green', 'violet', 'blue');
    body.classList.add('blue');
    localStorage.setItem('theme', 'blue');
}