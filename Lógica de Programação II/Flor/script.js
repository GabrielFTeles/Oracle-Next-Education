let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio, cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2*3.14);
    pincel.fill();
}

desenhaCirculo((tela.width / 2), (tela.height / 2), 30, 'red');
desenhaCirculo((tela.width / 2), ((tela.height / 2) - 60), 30, 'yellow');
desenhaCirculo((tela.width / 2), ((tela.height / 2)) + 60, 30, 'blue');
desenhaCirculo(((tela.width / 2) + 60), (tela.height / 2), 30, 'black');
desenhaCirculo(((tela.width / 2) - 60), (tela.height / 2), 30, 'orange');