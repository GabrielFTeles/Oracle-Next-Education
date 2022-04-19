let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

pincel.fillStyle = 'green';
pincel.fillRect(0, 0, tela.width, tela.height)

pincel.fillStyle = 'yellow';
pincel.beginPath();
pincel.moveTo(50, 200);
pincel.lineTo(300, 350);
pincel.lineTo(550, 200);
pincel.lineTo(300, 50);
pincel.fill();

pincel.fillStyle = 'darkblue';
pincel.beginPath();
pincel.arc(300, 200, 100, 0, 2*3.14);
pincel.fill();