const gameArea = document.getElementById("gameArea");
const car = document.getElementById("car");

const scoreEl = document.getElementById("score");
const starsEl = document.getElementById("stars");
const livesEl = document.getElementById("lives");

let score = 0;
let stars = 0;
let lives = 3;

const lanes = [40,140,240];
let laneIndex = 1;

let gameRunning = true;

function updateCar(){
    car.style.left = lanes[laneIndex]+"px";
}

document.addEventListener("keydown",(e)=>{
    if(e.key==="ArrowLeft" && laneIndex>0){
        laneIndex--;
        updateCar();
    }

    if(e.key==="ArrowRight" && laneIndex<2){
        laneIndex++;
        updateCar();
    }
});

document.getElementById("leftBtn").onclick=()=>{
    if(laneIndex>0){
        laneIndex--;
        updateCar();
    }
};

document.getElementById("rightBtn").onclick=()=>{
    if(laneIndex<2){
        laneIndex++;
        updateCar();
    }
};

function spawnObstacle(){

    if(!gameRunning) return;

    const obs=document.createElement("div");

    obs.className="obstacle";
    obs.innerHTML="🚧";

    const lane=Math.floor(Math.random()*3);

    obs.style.left=lanes[lane]+"px";
    obs.style.top="-60px";

    gameArea.appendChild(obs);

    let pos=-60;

    const move=setInterval(()=>{

        if(!gameRunning){
            clearInterval(move);
            return;
        }

        pos+=6;
        obs.style.top=pos+"px";

        const carRect=car.getBoundingClientRect();
        const obsRect=obs.getBoundingClientRect();

        if(
            obsRect.bottom > carRect.top &&
            obsRect.top < carRect.bottom &&
            obsRect.left < carRect.right &&
            obsRect.right > carRect.left
        ){

            lives--;
            livesEl.textContent=lives;

            obs.remove();
            clearInterval(move);

            if(lives<=0){
                gameOver();
            }
        }

        if(pos>700){
            score+=10;
            scoreEl.textContent=score;

            obs.remove();
            clearInterval(move);
        }

    },20);
}

function spawnStar(){

    if(!gameRunning) return;

    const star=document.createElement("div");

    star.className="star";
    star.innerHTML="⭐";

    const lane=Math.floor(Math.random()*3);

    star.style.left=lanes[lane]+"px";
    star.style.top="-50px";

    gameArea.appendChild(star);

    let pos=-50;

    const move=setInterval(()=>{

        if(!gameRunning){
            clearInterval(move);
            return;
        }

        pos+=5;
        star.style.top=pos+"px";

        const carRect=car.getBoundingClientRect();
        const starRect=star.getBoundingClientRect();

        if(
            starRect.bottom > carRect.top &&
            starRect.top < carRect.bottom &&
            starRect.left < carRect.right &&
            starRect.right > carRect.left
        ){

            stars++;
            score+=20;

            starsEl.textContent=stars;
            scoreEl.textContent=score;

            star.remove();
            clearInterval(move);
        }

        if(pos>700){
            star.remove();
            clearInterval(move);
        }

    },20);
}

function gameOver(){
    gameRunning=false;
    document.getElementById("gameOver")
    .classList.remove("hidden");

    document.getElementById("gameOver")
    .classList.add("flex");
}

setInterval(spawnObstacle,1200);
setInterval(spawnStar,2000);