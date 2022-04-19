const screen = document.querySelector('canvas');
const b = screen.getContext('2d');

let radius = 40;
let grow = 1;

function createCircle() {

    if (radius >= 50) {
        grow = -1;
    } else if (radius <= 40){
        grow = 1;
    }

    clearScreen();

    b.fillStyle = 'red';
    b.beginPath();
    b.arc(screen.width/2, screen.height/2, radius, 0, Math.PI*2)
    b.fill();

    radius += grow;
}

function clearScreen() {
    b.clearRect(0, 0, screen.width, screen.height);
}

setInterval(() => {
    createCircle();
}, 50);


//arc(x, y, raio, anguloInicial, anguloFinal [, antiHorario]);