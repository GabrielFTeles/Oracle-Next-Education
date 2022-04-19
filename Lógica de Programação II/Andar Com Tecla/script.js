let screen = document.querySelector('canvas');
let b = screen.getContext('2d');

b.fillStyle = 'black';
b.fillRect(0, 0, screen.width, screen.height);

let interval;

let x = screen.width / 2;
let y = screen.height / 2;
let move = 5

player();

function player() {
    b.clearRect(0, 0, screen.width, screen.height);

    b.fillStyle = 'black';
    b.fillRect(0, 0, screen.width, screen.height);

    if (x < 20) {
        b.fillStyle = 'white';
        b.beginPath();
        b.arc(screen.width + (x + 1), y, 20, 0, Math.PI * 2);
        b.fill();

        if (x < -40) {
            x = screen.width - 40;
        }
    }

    if (x > screen.width - 20) {
        b.fillStyle = 'white';
        b.beginPath();
        b.arc((x + 1) - screen.width, y, 20, 0, Math.PI * 2);
        b.fill();

        if (x > screen.width + 40) {
            x = 40;
        }
    }

    if (y < 20) {
        b.fillStyle = 'white';
        b.beginPath();
        b.arc(x, screen.height + (y + 1), 20, 0, Math.PI * 2);
        b.fill();

        if (y < -40) {
            y = screen.height - 40;
        }
    }

    if (y > screen.height - 20) {
        b.fillStyle = 'white';
        b.beginPath();
        b.arc(x, (y + 1) - screen.height, 20, 0, Math.PI * 2);
        b.fill();

        if (x > screen.width + 40) {
            x = 40;
        }
    }

    b.fillStyle = 'white';
    b.beginPath();
    b.arc(x, y, 20, 0, Math.PI * 2);
    b.fill();
}

addEventListener('keydown', (e) => {
    console.log(e)

    if (e.key == 'w' || e.key == 'ArrowUp') {
        y -= move; 
        intervalFunction();
    } else if (e.key == 'a' || e.key == 'ArrowLeft') {
        x -= move; 
        intervalFunction();
    } else if (e.key == 's' || e.key == 'ArrowDown') {
        y += move; 
        intervalFunction();
    } else if (e.key == 'd' || e.key == 'ArrowRight') {
        x += move; 
        intervalFunction();
    }
});

function intervalFunction() {
    interval = setInterval(() => player(), 20);
}

addEventListener('keyup', (e) => {
    clearInterval(interval);
});