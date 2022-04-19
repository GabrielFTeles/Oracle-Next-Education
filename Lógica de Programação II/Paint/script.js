const canvas = document.querySelectorAll('canvas');
const screen = canvas[0];
const size = canvas[1];
const brush = screen.getContext('2d');
const sizeBrush = size.getContext('2d');
const colorInput = document.querySelector('#color');
const body = document.querySelector('body');

brush.fillStyle = 'lightgrey';
brush.fillRect(0, 0, screen.width, screen.height);

let color = colorInput.value;
let radius = 10;
let draw;

sizeBall();

body.addEventListener('keydown', (e) => {
    if (e.key == 'x') {
        if (radius > 5) {
            radius -= 5;
            sizeBall();
        }
    }
});

body.addEventListener('keydown', (e) => {
    if (e.key == 'z') {
        if (radius < 40) {
            radius += 5;
            sizeBall();
        }
    }
});

colorInput.addEventListener('change', (e) => {
    color = colorInput.value;
    sizeBall();
});

screen.addEventListener('mousemove', (e) => {
    let x = e.pageX - screen.offsetLeft;
    let y = e.pageY - screen.offsetTop;

    createBall(x, y, e);
});

screen.addEventListener('mousedown', (e) => {
    draw = true;
    let x = e.pageX - screen.offsetLeft;
    let y = e.pageY - screen.offsetTop;
    createBall(x, y, e);
});

screen.addEventListener('mouseup', () => {
    draw = false;
});

function sizeBall() {
    sizeBrush.fillStyle = 'lightgrey';
    sizeBrush.fillRect(0, 0, screen.width, screen.height);
    sizeBrush.fillStyle = `${color}`;
    sizeBrush.beginPath();
    sizeBrush.arc( size.width/2, size.height/2, radius, 0, 2 * 3.14);
    sizeBrush.fill();
}

function createBall(x, y, e) {

    if (!draw) {
        return;
    }

    if (e.shiftKey) {
        radius = 20;
    }

    brush.fillStyle = `${color}`;
    brush.beginPath();
    brush.arc(x, y, radius, 0, 2 * 3.14);
    brush.fill();
}