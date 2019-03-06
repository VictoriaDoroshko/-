var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');

ctx.strokeStyle = "red";//задаем цвет обводки
ctx.fillStyle = "yellow";//задаем цвет заливки

canvas.onmousemove = function(event) {
    var x = event.offsetX;//задаем координаты
    var y = event.offsetY;

        ctx.clearRect(0, 0, 600, 600);//очищаем рабочую область
        ctx.beginPath();//очищаем путь

    var radius = Math.pow(Math.pow(x - 300, 2) + Math.pow(y - 300, 2), 0.5);//корень квадратный, применили Теорему Пифагора
        ctx.arc(300, 300, radius, 0, Math.PI * 2, false);//задаем координаты центра, радиса, начальную и конечную точки и направление по часовой стрелке
        ctx.stroke();// обводка
        ctx.fill();//выполняем заливку
}


