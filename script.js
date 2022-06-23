


const myTimer=document.querySelector(".timer");
const textArea=document.querySelector(".text-area");
const textSample=document.querySelector(".text-sample").innerHTML;
const resetButton=document.querySelector(".reset");


var timer=[0,0,0,0];
var timerRunning=false;
var interval;

// do two digits the numbers
function twodigits(timer){
    if(timer<10){
        timer="0"+timer;
    }
    return timer;
}


function doTimer(){
let onlineTime=twodigits(timer[0])+":"+twodigits(timer[1])+":"+twodigits(timer[2]);
myTimer.innerHTML=onlineTime;

timer[3]++;
timer[0]=Math.floor((timer[3]/100)/60);
timer[1]=Math.floor(timer[3]/100)-(timer[0]*60);
timer[2]=Math.floor(timer[3]-(timer[1]*100)-(timer[0]*6000));
}


function spellChecking(){
    let textEntered=textArea.value;
    let textMatching=textSample.substring(0,textEntered.length);


    if(textEntered==textSample){
        textArea.style.borderColor="green";
        clearInterval(interval);

    }else{

        if(textEntered==textMatching){
            textArea.style.borderColor="yellow";
            

        }else{
            textArea.style.borderColor="red";
            
        }

    }
}


function reset(){
    clearInterval(interval);
    interval=null;
    timer=[0,0,0,0];
    timerRunning=false;
    textArea.value="";
    myTimer.innerHTML="00:00:00";
    textArea.style.borderColor="grey";

}



function start(){
  
    let textEnteredLength=textArea.value.length;

    if(textEnteredLength==0 && !timerRunning)
    {
        timerRunning=true;
        interval=setInterval(doTimer,10);
    }
}


textArea.addEventListener("keypress",start);
textArea.addEventListener("keyup",spellChecking);
resetButton.addEventListener("click",reset);

