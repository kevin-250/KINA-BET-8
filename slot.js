var nbr1=document.getElementById('nbr1');
var nbr2=document.getElementById('nbr2');
var nbr3=document.getElementById('nbr3');
var a =0;
var b =0;
var c =0;
var num=document.getElementById("price1");
var nu=document.getElementById("price2");
var n=document.getElementById("price3");
var result=document.getElementById("result");
var WinLose=document.getElementById("Win-Lose");
var WarningBack=document.getElementById("Warning");
var in1=document.getElementById("Order1");
var in2=document.getElementById("Order2");
var in3=document.getElementById("Order3");
function Bet(){
    var num1=Number(num.value);
    var num2=Number(nu.value);
    var num3=Number(n.value);
    var sum= num1 + num2 + num3;
    var ord1=Number(in1.value);
    var ord2=Number(in2.value);
    var ord3=Number(in3.value);
    var machine1=setInterval((run),200)
    var machine2=setInterval((run2),200)
    var machine3=setInterval((run3),200)
    var x=Math.floor(Math.random()*9)+1;
    var y=Math.floor(Math.random()*9)+1;
    var z=Math.floor(Math.random()*9)+1;    
if(sum>=100){
    document.getElementById("waiting").style.display='block';
    document.getElementById("Bet").style.display='none';
setTimeout(()=>{
    document.getElementById("waiting").style.display='none';
    document.getElementById("Bet").style.display='block';
    document.getElementById("Bet").style.marginLeft="40px";
    },2000);
}
if(sum<100){
    WinLose.style.display="none";
    WarningBack.style.display="block";
    WarningBack.innerHTML="minimum amount is 100"+"FRW";
    clearInterval(machine1);
    clearInterval(machine2);
    clearInterval(machine3);
    setTimeout(() => {
        WarningBack.style.display="none";
    }, 1500);
}
function run(){
    nbr1.innerHTML=a++;
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
    nbr3.innerHTML=c++;
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
function finish(){
    var num1=Number(num.value);
    var num2=Number(nu.value);
    var num3=Number(n.value);
    var sum= num1 + num2 + num3;
    result.innerHTML= sum + "FRW";
}
function how(){
    document.getElementById("how-to").style.display='block';
    document.getElementById("board").style.display='none';
}
function back(){
    document.getElementById("how-to").style.display='none';
    document.getElementById("board").style.display='block';
}