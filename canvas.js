var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var ctx = canvas.getContext('2d')

// ctx.fillStyle = "rgba(255,0,0,0.6)";
// ctx.fillRect(100,100,100,100)

//Line
// ctx.beginPath();
// ctx.moveTo(50, 300);
// ctx.lineTo(300, 100);
// ctx.lineTo(400, 300);
// ctx.strokeStyle = "#abacaa";
// ctx.stroke();

// Arc / Circle
// ctx.beginPath();
// ctx.arc(300, 300, 30, 0, Math.PI * 2, false);
// ctx.strokeStyle = "blue";
// ctx.stroke();

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + 1 + ')';
}

// for (var i = 0; i < 100; i++) {
//  var x = Math.random() * window.innerWidth; 
//  var y = Math.random() * window.innerHeight;
//  ctx.beginPath();
//  ctx.arc(x, y, 30, 0, Math.PI * 2, false);
//  var color = random_rgba();
//  ctx.strokeStyle = color;
//  ctx.stroke();
// }

var mouse = {
    x: undefined,
    y: undefined
}

var maxRadius = 30;

window.addEventListener('mousemove', event => {
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    init()

})

function Circle(x, y, dx, dy, cr, minRadius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.cr = cr;
    this.color = random_rgba();
    this.minRadius = minRadius;

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.cr, 0, Math.PI * 2, false);
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.stroke();
        ctx.fill();
    }

    this.update = function () {
        if (this.x + this.cr > innerWidth || this.x - this.cr < 0) {
            this.color = random_rgba();
            this.dx = -this.dx;
        }

        if (this.y + this.cr > innerHeight || this.y - this.cr < 0) {
            this.color = random_rgba();
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        // Interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50 && this.cr < maxRadius) {
            this.cr += 1;
        } else if (this.cr > this.minRadius) {
            this.cr -= 1;
        }

        this.draw();
    }
}

var circleArray = [];

function init() {
    circleArray = [];

    for (var i = 0; i < 1000; i++) {
        var cr = Math.random() * maxRadius;
        var minRadius = 2;
        var x = Math.random() * (window.innerWidth - cr * 2) + cr;
        var y = Math.random() * (window.innerHeight - cr * 2) + cr;
        var dx = (Math.random() - 0.5) * 8;
        var dy = (Math.random() - 0.5) * 8;

        var circle = new Circle(x, y, dx, dy, cr, minRadius);
        circleArray.push(circle);
    }
}

function animate() {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, innerWidth, innerHeight);
    circleArray.forEach(circle => { circle.update(); });
}

init()
animate()