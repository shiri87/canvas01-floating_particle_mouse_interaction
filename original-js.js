const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;
let particleSArray;


function Particle(x, y, directionX, directionY, size, color){
        this.x=x;
        this.y=y;
        this.directionX=directionX;
        this.directionY=directionY;
        this.size = size;
        this.color = color;
    }

Particle.prototype.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI *2, false);
        ctx.fillStyle = this.color
        ctx.fill()
    }
const particle1 = new Particle(200,200,1,1,20,'white');
particle1.draw()

Particle.prototype.update = function(){
        if(this.x + this.size > canvas.width || this.x -this.size<0){
            this.directionX = -this.directionX
        }
        if(this.y + this.size >canvas.height || this.y -this.size<0){
            this.directionY = -this.directionY
        }

 //more particle
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    }

// //create particle array
function init(){
    particleSArray = [];
    for(let i=0; i < 100; i++){
        let size = Math.random()*20;
        let x = Math.random() * (innerWidth - size*2);
        let y = Math.random() * (innerHeight - size*2);
        let directionX = (Math.random()*.4)- .2;
        let directionY = (Math.random()*.4)- .2;
        let color = 'white';

        particleSArray.push(new Particle(x, y, directionX, directionY, size, color))
    }
}

// //animation loop
function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for(let i =0; i<particleSArray.length; i++){
        particleSArray[i].update();
    }
}
init()
animate();
//window resize 
window.addEventListener('resize',
function(){
    canvas.width = innerWidth
    canvas.height = innerHeight
    init()
})