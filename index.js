var colors=[
document.getElementById("1"),
document.getElementById("2"),
document.getElementById("3"),
document.getElementById("4"),
document.getElementById("5"),
document.getElementById("6"),
];
var play=true;
var easy=false;
var correct_color_num=Rand(0,5);
var correct_color=[0,0,0]
function restart(){
	if (easy==true){correct_color_num=Rand(0,2);}
		else
{correct_color_num=Rand(0,5);}
generate_correct_color();
generate_btn_colors();
document.getElementById("section-1").style.backgroundColor="#2C8E99";
document.getElementById("result").style.opacity=0;
document.getElementById("result").innerHTML="Try again";
play=true;
}
function generate_correct_color(){
	correct_color[0]=Rand(0,255);
    document.getElementById("R").innerHTML=correct_color[0];
    correct_color[1]=Rand(0,255);
    document.getElementById("G").innerHTML=correct_color[1];
    correct_color[2]=Rand(0,255);
    document.getElementById("B").innerHTML=correct_color[2];
}
generate_correct_color();
function Rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var red;
var blue;
var green;
function generate_btn_colors(){
colors.map((color, index)=>{
if(index==correct_color_num){
	red=correct_color[0];
    green=correct_color[1];
    blue=correct_color[2];
    console.log("ding!");
}
else{
red=Rand(0,255);
green=Rand(0,255);
blue=Rand(0,255);}
console.log(red,green,blue);
color.style.backgroundColor="rgb(" + red + ", " + green + ", " + blue + ")";
});
}
generate_btn_colors();

colors.map((color,index)=>{
	
color.onclick=function (){
 if(play==true){
	if(index==correct_color_num){
		colors.map((color,index)=>{
		color.style.backgroundColor="rgb(" + correct_color[0] + ", " + correct_color[1] + ", " + correct_color[2] + ")";
		document.getElementById("section-1").style.backgroundColor="rgb(" + correct_color[0] + ", " + correct_color[1] + ", " + correct_color[2] + ")";
		color.style.opacity=1;
		document.getElementById("result").innerHTML="CORRECT";
		play=false;
		});
		
		console.log("MA MAN");
	}
	else{
		color.style.opacity=0;
		document.getElementById("result").style.opacity=1;
	}
}
}});
document.getElementById("restart").onclick=function(){
	restart();
}
document.getElementById("ez").onclick=function(){
easy=true;
colors.map((color,index)=>{
	if(index>=3){
		color.style.opacity=0;
	}
	else{
		color.style.opacity=1;
	}
});
colors=[
document.getElementById("1"),
document.getElementById("2"),
document.getElementById("3"),
	];
restart();
}
document.getElementById("hard").onclick=function(){
easy=false;

colors=[
document.getElementById("1"),
document.getElementById("2"),
document.getElementById("3"),
document.getElementById("4"),
document.getElementById("5"),
document.getElementById("6"),
	];
colors.map((color,index)=>{
	color.style.opacity=1;
});
restart();
}





