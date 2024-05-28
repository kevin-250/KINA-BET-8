let  GAMEGUESS= document.getElementById('guessGameBack');
let  SLOTGAME= document.getElementById('slotGameBack');
let APPOLOBACK=document.getElementById('appoloBack');
let  loading1back= document.getElementById('loading1');
let  loading2back= document.getElementById('loading2');
let loading3back=document.getElementById('loading3');
let  machine= document.getElementById('machineResult');
let  homeIn= document.getElementById('home');
let  lastOddBack= document.getElementById('lastsOdds');
let  posibleOutComeBack= document.getElementById('posibleOutCome');
let  allGamesBack= document.getElementById('backAllGames');
let  cashNav= document.getElementById('amountUserNav');
let  userGuessNumberBack= document.getElementById('userGuessNumber');
let  navName= document.getElementById('nameUser');
let  customerName= document.getElementById('userName');
let  userCashBetInput= document.getElementById('userCashBet');
let  waitBtnBack= document.getElementById('waitBtn');
let  messageBack= document.getElementById('message');
let  betBtnBack= document.getElementById('betBtn');
let  amountUser= document.getElementById('userCash');
let  overCashBack= document.getElementById('overCash');
let backAudioBack= new Audio('backAudio.mp3');
let winAudioBack= new Audio('winAudio.mp3');
let  guBack= document.getElementById('gu');
let  register= document.getElementById('logIn');

let x=0;
let am= Number(amountUser.value);

setInterval(()=>{
  
cashNav.innerHTML=amountUser.value+'Frw';
},1);
function goCasino(){
homeIn.style.display='block';
allGamesBack.style.display='block'; 
APPOLOBACK.style.display='none';
loading2back.style.display='none';
loading3back.style.display='none';
SLOTGAME.style.display='none';
loading1back.style.display='none';
GAMEGUESS.style.display='none';


}
function homeShow(){
register.style.display='none';
homeIn.style.display='block';
let am= Number(amountUser.value);

navName.innerHTML=customerName.value;
cashNav.innerHTML=am+"FRW";

if(am<10){
amountUser.style.border='3px solid white';
register.style.display='block';
homeIn.style.display='none';
}

if(am>15000){
overCashBack.style.display='block';
homeIn.style.display='none';
overCashBack.innerHTML="* Limit amount is 10,000 Frw ?"+"<br>"+"* Reduce your amount to continue ";
register.style.display='block';
amountUser.style.border='3px solid white';
setTimeout(() => {
overCashBack.style.display='none';
}, 3000);
}
}

function guessShow(){
loading1back.style.display='block';
allGamesBack.style.display='none';

setTimeout(() => {
loading1back.style.display='none';
backAudioBack.play();
allGamesBack.style.display='none';
GAMEGUESS.style.display='block';
}, 5000);

}
function appolo(){

loading3back.style.display='block';
allGamesBack.style.display='none';
GAMEGUESS.style.display='none';
SLOTGAME.style.display='none';
setTimeout(() => {
loading3back.style.display='none';
APPOLOBACK.style.display='block';
allGamesBack.style.display='none';
backAudioBack.play();

}, 5000);

}
function slotShow(){
allGamesBack.style.display='none';
register.style.display='none';
GAMEGUESS.style.display='none';
loading2back.style.display='block';
setTimeout(() => {
loading2back.style.display='none';
allGamesBack.style.display='none';
backAudioBack.play();
SLOTGAME.style.display='block';
}, 5000);
}

function howToPlayF(){
howToBack.style.display="block";
guBack.style.display='none'

}
var frb=1;
function gameStart(){
let Come1= Math.floor(Math.random()*11)+1;
let Come2= Math.floor(Math.random()*11)+1;
let Come3= Math.floor(Math.random()*11)+1;
let Come4= Math.floor(Math.random()*11)+1;
let Come5= Math.floor(Math.random()*11)+1;
x=0;
machine.style.color="rgb(241, 157, 0)";
let Come6= Math.floor(Math.random()*11)+1;
let runIntervalT= setInterval((startGame),400);
messageBack.style.transform="translateX(0px)";
backAudioBack.play();

let am= Number(amountUser.value);
let guesNumber= Number(userCashBetInput.value);
let userGess=Number(userGuessNumberBack.value);
let realTimeMoney=setTimeout(()=>{
cashNav.innerHTML=am+'Frw';
},1);
let randomNumber= Math.floor(Math.random()*10)+2;
waitBtnBack.style.display='block';
betBtnBack.style.display='none';
frb++;
if(userGess>11){
messageBack.style.display='block';
am=0;
messageBack.style.backgroundColor="red";
messageBack.innerHTML="Wish odd limit is 11X";
let s= setTimeout(()=>{
messageBack.style.display='none';
waitBtnBack.style.display='none';
betBtnBack.style.display='block';
},2000);
clearInterval(runIntervalT);
}
messageBack.style.transform='tranlateX(0px)';
if(guesNumber<=0){
messageBack.style.display='block';
am=0;
messageBack.style.backgroundColor="red";
messageBack.style.transform='tranlateX(50px)';
messageBack.innerHTML="You can't bet that amount ";
let s= setTimeout(()=>{
messageBack.style.display='none';
waitBtnBack.style.display='none';
betBtnBack.style.display='block';
},2000);
clearInterval(runIntervalT);
}
if(am<guesNumber){
messageBack.style.display='block';
am=0;
messageBack.style.backgroundColor="red";
messageBack.style.transform='tranlateX(50px)';
messageBack.innerHTML="you don't have that kind of money";
let s= setTimeout(()=>{
messageBack.style.display='none';
waitBtnBack.style.display='none';
betBtnBack.style.display='block';
},2000);
clearInterval(runIntervalT);
}

if(am<=0){
messageBack.style.display='block';
am=0;
messageBack.style.transform="translateX(50px)";
messageBack.style.backgroundColor="red";
messageBack.innerHTML="You can not bet that";
console.log("hiu")
let s= setTimeout(()=>{
messageBack.style.display='none';
waitBtnBack.style.display='none';
betBtnBack.style.display='block';
},2000);
clearInterval(runIntervalT);
}

else{
let am= Number(amountUser.value);
let guesNumber= Number(userCashBetInput.value);
amountUser.value=amountUser.value-userCashBetInput.value;
}
if(userGess<0){
messageBack.style.display='block';
messageBack.style.backgroundColor="red";
messageBack.style.transform='tranlateX(40px)';
messageBack.innerHTML="Please enter Your choice to bet";
let s= setTimeout(()=>{
messageBack.style.display='none';
waitBtnBack.style.display='none';
betBtnBack.style.display='block';
},2000);
clearInterval(runIntervalT);
}
if(frb>=16 && am<1000){
  messageBack.style.display='block';
messageBack.style.backgroundColor="rgb(241, 225, 0)";
messageBack.innerHTML="You  got free bet of 500Frw";
betBtnBack.style.display='none';
amountUser.value=am+500;
waitBtnBack.style.display='block';
let s= setTimeout(()=>{
messageBack.style.display='none';
waitBtnBack.style.display='none';
betBtnBack.style.display='block';
},2000);

}
machine.style.fontFamily="arial";
function startGame(){
machine.innerHTML=x++ +"x";
let guesNumber= Number(userCashBetInput.value);
let am= Number(amountUser.value);

if(randomNumber==x){
machine.style.fontFamily="arial";
posibleOutComeBack.innerHTML=Come1+"x"+"<br>"+Come2+"x"+"<br>"+Come3+"x"+"<br>"+Come4+"x"+"<br>"+Come5+"x"+"<br>"+Come6+"x"+"<br>";
if( am<=8 && am>=1 ){
messageBack.style.display='block';
messageBack.style.backgroundColor="rgb(241, 225, 0)";
messageBack.innerHTML="You  got free bet of 500Frw";
betBtnBack.style.display='none';
amountUser.value=am+500;
waitBtnBack.style.display='block';
let s= setTimeout(()=>{
messageBack.style.display='none';
waitBtnBack.style.display='none';
betBtnBack.style.display='block';
},2000);
} 
clearInterval(runIntervalT);
machine.innerHTML=randomNumber+"x";
machine.style.color="rgb(207, 17, 3)";

waitBtnBack.style.display='none';
betBtnBack.style.display='block';
lastOddBack.innerHTML+=randomNumber+"x" +"<br>";
if(userGess==randomNumber){
machine.style.color="rgb(21, 255, 0)";
machine.style.fontFamily="Algerian";
messageBack.style.display='block';
messageBack.style.transform="translateX(87px)";
winAudioBack.play();
let am= Number(amountUser.value);
messageBack.style.backgroundColor="rgb(59, 255, 75)";
messageBack.style.border="none";
messageBack.innerHTML="You won"+ " "+ (guesNumber*randomNumber) +"Frw" ;
amountUser.value=am+(guesNumber*randomNumber);
console.log("You won"+ " "+ (guesNumber*randomNumber) +"Frw");
let s= setTimeout(()=>{
messageBack.style.display='none';
waitBtnBack.style.display='none';
betBtnBack.style.display='block';
},2000);

}
}

}

}
function one(){

userCashBetInput.value=100;
}
function two(){

userCashBetInput.value=200;
}
function five(){

userCashBetInput.value=500;
}
function k(){

userCashBetInput.value=1000;
}
function k2(){

userCashBetInput.value=2000;
}
// gratien codes start here kiz
// gratien codes start here kiz
// gratien codes start here kiz
// gratien codes start here kiz
// gratien codes start here kiz
// gratien codes start here kiz
// gratien codes start here kiz

var nbr1=document.getElementById('nbr1');
var nbr2=document.getElementById('nbr2');
var nbr3=document.getElementById('nbr3');
var a =0;
var b =0;
var c =0;
var num=document.getElementById("price1");


var WinLose=document.getElementById("Win-Lose");
var WarningBack=document.getElementById("Warning");
var in1=document.getElementById("Order1");

function Bet(){
var num1=Number(num.value);
WarningBack.style.backgroundColor="rgb(235, 58, 58);";
  WarningBack.style.color="black";
nbr1.style.color="rgb(255, 208, 0)";
nbr2.style.color="rgb(255, 208, 0)";
nbr3.style.color="rgb(255, 208, 0)";
var ord1=Number(in1.value);

var machine1=setInterval((run),200)
var machine2=setInterval((run2),200)
var machine3=setInterval((run3),200)
var x=Math.floor(Math.random()*4)+1;
var y=Math.floor(Math.random()*4)+1;
var z=Math.floor(Math.random()*4)+1; 

let am= Number(amountUser.value);
let guesNumber= Number(userCashBetInput.value);
let userGess=Number(userGuessNumberBack.value); 
amountUser.value=am-num1;
document.getElementById("Bet").style.display='none';
document.getElementById("waiting").style.display='block';
document.getElementById("waiting").style.transform="translateX(40px)";
setTimeout(()=>{
document.getElementById("Bet").style.display='block';
document.getElementById("Bet").style.transform="translateX(40px)";

document.getElementById("waiting").style.display='none';
},2500);
if(ord1>5 || ord1<1){
    WarningBack.style.display='block';
    WarningBack.style.color="red";
    in1.value=0;
    console.log('op')
    WarningBack.innerHTML="You are out of range enter number from 1 - 5 ";
    clearInterval(run2);
    clearInterval(run);
clearInterval(run3);
nbr1.innerHTML="-";
nbr2.innerHTML="-";
nbr3.innerHTML="-";
setTimeout(()=>{
WarningBack.style.display='none';
},2000);
  }  
if(num1>am){
WarningBack.style.backgroundColor="red";
document.getElementById("Bet").style.display='none';
document.getElementById("waiting").style.display='block';
WarningBack.style.color="black";
WarningBack.innerHTML="You  don't have that amount ";
let s= setTimeout(()=>{
WarningBack.style.display='none';
document.getElementById("waiting").style.display='none';
document.getElementById("Bet").style.display='block';

betBtnBack.style.display='block';
},2000);
c
}
if(num1<=0){
WarningBack.style.display='block';
console.log("cant 1");
WarningBack.style.backgroundColor="red";
document.getElementById("Bet").style.display='none';
document.getElementById("waiting").style.display='block';
WarningBack.style.color="black";
WarningBack.innerHTML="You can't bet that amount  ";
let s= setTimeout(()=>{
WarningBack.style.display='none';
document.getElementById("waiting").style.display='none';
document.getElementById("Bet").style.display='block';

betBtnBack.style.display='block';
},2000);
clearInterval(run);
clearInterval(run2);
clearInterval(run3);
nbr1.innerHTML="-";
nbr2.innerHTML="-";
nbr3.innerHTML="-";
} 
backAudioBack.play();

if(am<=0){

WarningBack.style.display='block';
am=0;
amountUser.value=0;
WarningBack.style.backgroundColor="red";
document.getElementById("Bet").style.display='none';
document.getElementById("waiting").style.display='block';
WarningBack.style.color="black";
WarningBack.innerHTML="Not enough balance ";
amountUser.value=0;
let s= setTimeout(()=>{
WarningBack.style.display='none';
document.getElementById("waiting").style.display='none';
document.getElementById("Bet").style.display='block';

betBtnBack.style.display='block';
},2000);
clearInterval(run);
clearInterval(run2);
clearInterval(run3);
nbr1.innerHTML="-";
nbr2.innerHTML="-";
nbr3.innerHTML="-";
clearInterval(machine1);
clearInterval(machine2);
clearInterval(machine3);
}  



function run(){
nbr1.innerHTML=a++;
if(ord1>5 || ord1<1){
    WarningBack.style.display='block';
    WarningBack.style.color="red";
    in1.value=0;
    WarningBack.innerHTML="You are out of range enter number from 1 - 5 ";
    clearInterval(run);
clearInterval(run2);
clearInterval(run3);
nbr1.innerHTML="-";
nbr2.innerHTML="-";
nbr3.innerHTML="-";
setTimeout(()=>{
WarningBack.style.display='none';
},2000);
  }
if(ord1==x &&ord1==z&&ord1==y){
  WarningBack.style.display='block';
  nbr1.style.color="rgb(21, 255, 0)";
  nbr2.style.color="rgb(21, 255, 0)";
  nbr3.style.color="rgb(21, 255, 0)";
  WarningBack.style.backgroundColor="rgb(15, 168, 15)";
  WarningBack.style.color="black";
  WarningBack.innerHTML="You won"+ " all number "+ (num1*(x+y+z))+"Frw" ;
amountUser.value=am+(num1*(x+y+z));
winAudioBack.play();
setTimeout(()=>{
WarningBack.style.display='none';
},3000);
}
if(ord1==x &&ord1==y){
  WarningBack.style.display='block';
  nbr1.style.color="rgb(21, 255, 0)";
  nbr2.style.color="rgb(21, 255, 0)";
  WarningBack.style.backgroundColor="rgb(15, 168, 15)";
  WarningBack.style.color="black";
  WarningBack.innerHTML="You won"+ "number1 and number2 "+ (num1*(x+y))+"Frw" ;
amountUser.value=am+(num1*(x+y));
winAudioBack.play();
setTimeout(()=>{
WarningBack.style.display='none';
},3000);
}

if(a==x) {
nbr1.innerHTML=x;
clearInterval(machine1);
a=0;
}
if(a==9){
a=0;
}
}
function run2(){
nbr2.innerHTML=b++;
if(ord1>5 || ord1<1){
    WarningBack.style.display='block';
    WarningBack.style.color="red";
    in1.value=0;
    WarningBack.innerHTML="You are out of range enter number from 1 - 5 ";
    clearInterval(run);

nbr1.innerHTML="-";
nbr2.innerHTML="-";
nbr3.innerHTML="-";
setTimeout(()=>{
WarningBack.style.display='none';
},2000);
  }
if(ord1==x &&ord1==z&&ord1==y){
  WarningBack.style.display='block';
  nbr1.style.color="rgb(21, 255, 0)";
  nbr2.style.color="rgb(21, 255, 0)";
  nbr3.style.color="rgb(21, 255, 0)";
  WarningBack.style.backgroundColor="rgb(15, 168, 15)";
  WarningBack.style.color="black";
  WarningBack.innerHTML="You won"+ "all number "+ (num1*x)+"Frw" ;
amountUser.value=am+(num1*(x+y+z));

winAudioBack.play();
setTimeout(()=>{
WarningBack.style.display='none';
},3000);
}
if( ord1==z&&ord1==y){
  WarningBack.style.display='block';
  WarningBack.style.backgroundColor="rgb(15, 168, 15)";
  WarningBack.style.color="black";
  nbr2.style.color="rgb(21, 255, 0)";
  nbr3.style.color="rgb(21, 255, 0)";
  WarningBack.innerHTML="You won"+ "number2 and number3 "+ (num1*(y+z))+"Frw" ;
amountUser.value=am+(num1*(y+z));
winAudioBack.play();
setTimeout(()=>{
WarningBack.style.display='none';
},3000);
}

if(b==y){
nbr2.innerHTML=y;
clearInterval(machine2);
b=0;
}
if(b==9){
b=0;
}
}
function run3(){
if(ord1>5 || ord1<1){
    WarningBack.style.display='block';
    WarningBack.style.color="red";
    in1.value=0;
    console.log('op')
    WarningBack.innerHTML="You are out of range enter number from 1 - 5 ";
    clearInterval(run2);
    clearInterval(run);
clearInterval(run3);
nbr1.innerHTML="-";
nbr2.innerHTML="-";
nbr3.innerHTML=".";
setTimeout(()=>{
WarningBack.style.display='none';
},2000);
  }  
nbr3.innerHTML=c++;

if(ord1==x &&ord1==z&&ord1==y){
  WarningBack.style.display='block';
  nbr1.style.color="rgb(21, 255, 0)";
  nbr2.style.color="rgb(21, 255, 0)";
  nbr3.style.color="rgb(21, 255, 0)";
  WarningBack.style.backgroundColor="rgb(15, 168, 15)";
  WarningBack.style.color="black";
  WarningBack.innerHTML="You won"+ "all number "+ (num1*x)+"Frw" ;
amountUser.value=am+(num1*(x+y+z));
winAudioBack.play();
setTimeout(()=>{
WarningBack.style.display='none';
},3000);
}

  
if( ord1==z&&ord1==y){
  WarningBack.style.display='block';
  nbr2.style.color="rgb(21, 255, 0)";
  nbr3.style.color="rgb(21, 255, 0)";
  WarningBack.style.backgroundColor="rgb(15, 168, 15)";
  WarningBack.style.color="black";
  WarningBack.innerHTML="You won"+ "number2 and number 3 "+ (num1*(y+z))+"Frw" ;
amountUser.value=am+(num1*(y+z));
winAudioBack.play();
setTimeout(()=>{
WarningBack.style.display='none';
},3000);
}

if(c==z){
nbr3.innerHTML=z;
clearInterval(machine3);
c=0;
// document.getElementById("waiting").style.display='none';
// document.getElementById("Bet").style.display='block';
// document.getElementById("Bet").style.marginLeft="40px";
// result.innerHTML="0";
}
if(c==9){
c=0;
}
}
}

function how(){
document.getElementById("how-to").style.display='block';
document.getElementById("board").style.display='none';
}
function back(){
document.getElementById("how-to").style.display='none';
document.getElementById("board").style.display='block';
}
setInterval(()=>{
if(am==0){
amountUser.value=0;
}

});
// appolo codes are here men
// appolo codes are here men
// appolo codes are here men
// appolo codes are here men
// appolo codes are here men
// appolo codes are here men
// appolo codes are here men

let appoloBetBtn= document.getElementById('betBtnAppolo')
let appoloCashOutBtn= document.getElementById('cashoutBtnAppolo')
let appoloMessageBack=document.getElementById('appoloMessage');
let appoloAmountBet=document.getElementById('appoloAmount');
let realOddBack= document.getElementById('realOdd');
let lastApolloOdBack= document.getElementById('lastApolloOd');
let xz=1;
let playing=new Audio('Live-Bet_5.mp3');
// let rocketBack= document.getElementById('plane');
let motionMax=100;
let motionMin=1;
    let y=0.1;
    appoloCashOutBtn.style.transform='translateX(60px)';
    let i= 100;
    // let autobetBack= document.getElementById('autobet');
    let rock1=document.getElementById('roc1');
    let rock2=document.getElementById('roc2');
    let leaveRocket = new Audio('plane leave.mp3')
    var frb2=1;
function betAppolo(){
//  rocket motion here
realOddBack.style.fontSize='25px'
rock1.style.display='block';
rock2.style.display='none';
rock1.style.transform=' translate(0px,0px)';
rock1.style.transform=' rotate(-50deg)';
xz=1;
playing.play();
// let aut=Number(autobetBack.value);
var amountBetted2=Number(appoloAmountBet.value);
let am= Number(amountUser.value);
frb2++;

amountUser.value=am-amountBetted2;
appoloBetBtn.style.display='none';
realOddBack.style.color='rgb(0, 113, 165)';
appoloCashOutBtn.style.display='block';
appoloMessageBack.style.backgroundColor='rgb(0, 113, 165)';
var min=0.99;
rock1.src='rocket 1.gif';
var max=4.00;
var spd=1;

let maxRand=Math.floor(Math.random()*100);


//here max odd 
let spdTm=setInterval(()=>{
if(spd<49){
spd++;


}
else {
 clearInterval(spdTm);
rock1.style.transform=' translate(320px,-160px)';
}


},300);



if(frb2>=16 && am<1000){
  appoloMessageBack.style.display='block';
appoloMessageBack.style.backgroundColor="yellow";
appoloMessageBack.innerHTML="You  got free bet of 500Frw";
betBtnBack.style.display='none';
amountUser.value=am+500;
clearInterval(spdTm);

waitBtnBack.style.display='block';
let s= setTimeout(()=>{
appoloMessageBack.style.display='none';
waitBtnBack.style.display='none';
betBtnBack.style.display='block';
},2000);

}
var min2=1.01;
var max2=3.30;
var min3=1.01;
var max3=3.10;
let ino = setInterval(()=>{
//1
//11
//
  xz+=0.01;
  var fixedRoll= xz.toFixed(2);
  realOddBack.innerHTML=fixedRoll+"x";
  let outB=amountBetted2*fixedRoll;
  let outNow=outB.toFixed(2);
  realOddBack.style.fontFamily='impact';

let unHackble= setTimeout(()=>{
  var rndom=Math.random()*(max-min)+min;
  var rndom2=Math.random()*(max2-min2)+min2;
  var rndom3=Math.random()*(max3-min3)+min3;

  rndom-=0.02;
  rndom2-=0.01;
  rndom3+=0.01;

  var fixedRndm=rndom.toFixed(2);
  var fixedRndm2=rndom2.toFixed(2);
  var fixedRndm3=rndom3.toFixed(2);

if(fixedRoll==fixedRndm ||fixedRoll==fixedRndm2 ||fixedRoll==fixedRndm3){
 if(fixedRoll==fixedRndm){
  lastApolloOdBack.innerHTML=fixedRndm+'x' +'||';
 }
 if(fixedRoll==fixedRndm2){
  lastApolloOdBack.innerHTML=fixedRndm2+'x' +'||';
 }
 if(fixedRoll==fixedRndm3){
  lastApolloOdBack.innerHTML=fixedRndm3+'x' +'||';
 }
  appoloWaitingBack.style.display='block';
  realOddBack.style.color='red';
  // lastApolloOdBack.innerHTML=fixedRndm+'x' +'||';
  // console.log(fixedRndm);
clearInterval(unHackble);
  appoloCashOutBtn.style.display='none';
  spd=1;
  clearInterval(spdTm);
  leaveRocket.play();
  rock1.src='explode1.gif';
  clearInterval(ino);
  setTimeout(()=>{
  rock1.style.display='none';
  rock2.style.display='block';
  appoloBetBtn.style.display='block';
  appoloCashOutBtn.style.transform='translateX(70px)';
  appoloWaitingBack.style.display='none';
  appoloBetBtn.style.transform='translateX(70px)';
  
  },1000);
  }
  if(fixedRoll==16.2){
    realOddBack.style.color='red';
    spd=1;
    clearInterval(spdTm);
    leaveRocket.play();
    rock1.src='explode1.gif';
    clearInterval(ino);
    setTimeout(()=>{
    rock1.style.display='none';
    rock2.style.display='block';
    appoloBetBtn.style.display='block';
    appoloCashOutBtn.style.transform='translateX(70px)';
    appoloWaitingBack.style.display='none';
    appoloBetBtn.style.transform='translateX(70px)';
    appoloCashOutBtn.style.display='none';
    },1000); 
    }
    

},1)

if(am==0){
amountUser.value=0;
}
if(amountBetted2>am){
appoloBetBtn.style.display='block';
spd=1;

clearInterval(spdTm);
appoloBetBtn.style.transform='translateX(70px)';
appoloCashOutBtn.style.transform='translateX(80px)';
appoloCashOutBtn.style.display='none';
rock1.style.display='none';
rock2.style.display='block';
clearInterval(ino);
realOddBack.innerHTML='';
appoloMessageBack.style.display='block';

appoloMessageBack.innerHTML='Low amount to bet';
setTimeout(()=>{
appoloMessageBack.style.display='none';

},2500);
}

appoloCashOutBtn.innerText="Cash out"+" : "+outNow+'Frw';
if(amountBetted2<=0 || am<=0){
appoloBetBtn.style.display='block';
spd=1;
if(am<=0){
  amountUser.value=0;
}
clearInterval(spdTm);
appoloBetBtn.style.transform='translateX(70px)';
appoloCashOutBtn.style.transform='translateX(80px)';
appoloCashOutBtn.style.display='none';
rock1.style.display='none';
rock2.style.display='block';
clearInterval(ino);
realOddBack.innerHTML='-';
appoloMessageBack.style.display='block';

appoloMessageBack.innerHTML='Please enter amount to bet';
setTimeout(()=>{
appoloMessageBack.style.display='none';

},2500);
}



},90);
}

function red(){
let y0=Number( appoloAmountBet.value);
appoloAmountBet.value=y0-100;
}
function incre(){
let y0=Number( appoloAmountBet.value);
appoloAmountBet.value=y0+100;
}
function twoH(){
appoloAmountBet.value=200;
}
function fiveH(){
appoloAmountBet.value=500;

}
function kH(){
appoloAmountBet.value=1000;
}
function tH(){
appoloAmountBet.value=2000;
}

// function autoBetShow(){
// autobetBack.style.display='block';
// autobetBack.style.transform='translate(90px,10px)';

// }
// function autoBetHide(){
// autobetBack.style.display='none';
// autobetBack.value=0;
// autobetBack.style.transform='translate(90px,10px)';

// }


let appoloWaitingBack=document.getElementById('appoloWaiting');
function appoloCashOut(){


let po=xz.toFixed(2);
let am= Number(amountUser.value);
var amountBetted2=Number(appoloAmountBet.value);
amountUser.value=am+(amountBetted2*po);
appoloCashOutBtn.style.transform='translateX(70px)';
// rock1.style.transform=' translate(260px,-180px)';

appoloMessageBack.style.backgroundColor='rgb(46, 248, 56)';
appoloBetBtn.style.transform='translateX(70px)';
appoloCashOutBtn.style.display='none';
appoloMessageBack.style.display='block';
appoloWaitingBack.style.display='block';

appoloMessageBack.innerHTML='You won'+ ': '+ amountBetted2*po+' '+"Frw";
setTimeout(()=>{
appoloMessageBack.style.display='none';

},2500);
}
