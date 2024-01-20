let iScore = 0.0;
let rndHit;
function getHit(){
    rndHit = Math.floor((Math.random()*9)+1);
    document.querySelector("#target").textContent = "Target : " +rndHit;
}

document.querySelector(".gameBoard").addEventListener("click",(dets)=>{
    if(Number(dets.target.textContent) == rndHit){
        iScore+=10;
        document.querySelector("#score").textContent = "Score : "+ iScore;
        console.log(dets.target);
        dets.target.style.backgroundColor = "white";
        setTimeout(()=>{
            dets.target.style.backgroundColor = "#0fa3b1";
            makeBubbles();
        },200)
        getHit();
        
    }
})

function makeBubbles(){
    let bubbles = '';
    for(let i=0;i<72;i++){
        let randInt = Math.floor((Math.random()*9)+1);
        bubbles+= `<div class="bubble">${randInt}</div>`
    }
     document.querySelector(".gameBoard").innerHTML = bubbles;
}

function timer(){
    let iTime = 60;
    let timer = setInterval(()=>{
        if(iTime>0){
            iTime--;
            document.querySelector("#timer").textContent = "Time : "+iTime;
        }
        else{
            document.querySelector("#target").textContent = "Target : ??";
            document.querySelector(".gameBoard").innerHTML = `<strong><center>Times Up!!<br>Your Score is : <span>${iScore}</span></center></strong>`;
            clearInterval(timer);
        }
    },1000)
}

makeBubbles();
timer();
getHit();
