const screen = document.querySelector('canvas');
const brush = screen.getContext('2d');

let radius = 10;
let positions;
let interval;
let gameOver;

brush.fillStyle = 'lightgrey';
brush.fillRect(0, 0, screen.width, screen.height);

function randomLocation() {
    let x = Math.round(Math.random() * (771 - 30) + 30);
    let y = Math.round(Math.random() * (571 - 30) + 30);
    positions = [x, y];
}

function drawCircle() {
    
    randomLocation();

    brush.shadowOffsetX = 3;
    brush.shadowOffsetY = 3;
    brush.shadowColor = 'rgba(0,0,0,0.3)';
    brush.shadowBlur = 4;

    brush.clearRect(0, 0, screen.width, screen.height);
    brush.fillStyle = 'lightgrey';
    brush.fillRect(0, 0, screen.width, screen.height);

    brush.fillStyle = 'red';
    brush.beginPath();
    brush.arc(positions[0], positions[1], radius + 20, 0, 2 * Math.PI);
    brush.fill();

    brush.fillStyle = 'white';
    brush.beginPath();
    brush.arc(positions[0], positions[1], radius + 10, 0, 2 * Math.PI);
    brush.fill();

    brush.fillStyle = 'red';
    brush.beginPath();
    brush.arc(positions[0], positions[1], radius, 0, 2 * Math.PI);
    brush.fill();
}

const intervalFunction = () => {
    interval = setInterval(() => drawCircle(), 1000);
}

intervalFunction();

screen.addEventListener('click', (e) => {

    if (gameOver) {
        return;
    }

    let x = e.pageX - screen.offsetLeft;
    let y = e.pageY - screen.offsetTop;

    if ((x > (positions[0] - 10) && x < (positions[0] + 10)) && (y > (positions[1] - 10) && y < (positions[1] + 10))) {
        circleBreak();
        shot(x, y);
        sucess();
        clearInterval(interval);

        gameOver = true;

        setTimeout(() => {
            intervalFunction();
            gameOver = false;
            screen.style.border = 'none';
        }, 18000);
    } else {
        shot(x, y);
        failed();
    }
});

function failed() {
    let audio = document.createElement("audio");
    audio.src = './audio/errou.mp3';
    audio.addEventListener("ended", function() {
    document.removeChild(this);
    }, false);
    audio.play();
}

function sucess() {
    let audio = document.createElement("audio");
    audio.src = './audio/acertou.mp3';
    audio.addEventListener("ended", function() {
    document.removeChild(this);
    }, false);
    audio.play();

    screen.style.border = '2px solid #0cf045';

    brush.fillStyle = '#0cf045';
    brush.beginPath();
    brush.font = '40px Poppins';
    brush.fillText('Você Acertou! Parabens!', 150, screen.height/2);
}

function shot(x, y) {
    brush.fillStyle = 'black';
    brush.beginPath();
    brush.font = '15px Poppins';
    brush.fillText('X', (x - 7), (y + 7));
}

function circleBreak() {
    brush.strokeStyle = 'lightgrey';
    brush.lineWidth = 3;
    brush.beginPath();
    brush.moveTo((positions[0] + 5), (positions[1] - 30));
    brush.lineTo(positions[0] - 5, (positions[1] - 20));
    brush.lineTo(positions[0] + 5, (positions[1] - 10));
    brush.lineTo(positions[0] - 5, (positions[1]) + 5);
    brush.lineTo(positions[0] + 5, (positions[1] + 20));
    brush.lineTo(positions[0], (positions[1] + 30));
    brush.stroke();
}