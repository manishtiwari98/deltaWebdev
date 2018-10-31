//Good job ma nigguh
function addMemo(){
	var memoText=document.getElementById('memoText').innerHTML;
	if(memoText=='')
		alert("Pls Enter Some Text");
	else {
	var mc=document.getElementById('memo_container');
    var divElement=document.createElement('div');
    divElement.className='text_container';
   
    
    divElement.innerHTML="<div class='btn'><input class='eBtn' type='button' value='Edit' onClick='edit(this);'> <input class='rmBtn' type='button' value='Remove' onClick='rem(this);'></div>";
    divElement.innerHTML+='<div class="priority"><input class="red" type="button" onclick="red(this);"><input class="green" type="button" onclick="green(this);"><input class="yellow" type="button" onclick="yellow(this);"></div>';
    divElement.innerHTML+=memoText;
    mc.appendChild(divElement);
}
storeLocally();
}

function edit(id){
	var target=id.parentElement.parentElement;
if(id.value=="Edit"){

target.contentEditable='true';
id.value="Save";
}
else if(id.value=='Save')
{
target.contentEditable='false';
id.value="Edit";

}
storeLocally();
}


function rem(id){

var x=id.parentElement.parentElement;
x.parentNode.removeChild(x);
storeLocally();
}

function storeLocally(){

	var m=document.getElementById('body').innerHTML;
	localStorage.setItem('saved',m);
	
}

function retrive()
{
if(typeof localStorage.saved!=='undefined')
	document.getElementById('body').innerHTML=localStorage.saved;
}
function red(id){
var x=id.parentElement.parentElement;
x.style.background="#f94f52";

}
function green(id){
var x=id.parentElement.parentElement;
x.style.background="#44fc50";

}
function yellow(id){
var x=id.parentElement.parentElement;
x.style.background="#fffc6b";
}

function sort(){
	var x=document.getElementsByClassName("text_container");

	var i=0;var k=1;var j=0;
	for(k=1;k<3;k++)
	{        
		for (i=j;i<x.length;i++)
		{
			if(pv(x[i])==k)
			{
				swap (x[j],x[i]);
				j++;
			}
		}

	}
storeLocally();
}
function swap(id1,id2){
	var p=id1.innerHTML;
	var c=id1.style.background;
	id1.innerHTML=id2.innerHTML;
	id2.innerHTML=p;
	id1.style.background=id2.style.background;
	id2.style.background=c;
	
	
}

function help(){

	alert("Priortize your notes by choosing colors:\nRed: High priority\nYellow: Medium priority \nGreen: Low priority.");
}

function pv(id){

	var color=id.style.backgroundColor;

	if(color=='rgb(249, 79, 82)')
		return 1;
	else if(color=="rgb(68, 252, 80)")
        return 3;
    else return 2;
}
