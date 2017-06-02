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
}divElement.pv=2;
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
x.pv=1;
}
function green(id){
var x=id.parentElement.parentElement;
x.style.background="#44fc50";
x.pv=3;
}
function yellow(id){
var x=id.parentElement.parentElement;
x.style.background="#fffc6b";
x.pv=2;
}

function sort(){
	var x=document.getElementsByClassName("text_container");
	var i=0;var k=1;var j=0;
	for(k=1;k<3;k++)
	{        
		for (i=j;i<x.length;i++)
		{
			if(x[i].pv==k)
			{console.log(x[j].pv,x[i].pv);
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
	var s=id1.pv;
	id1.innerHTML=id2.innerHTML;
	id2.innerHTML=p;
	id1.style.background=id2.style.background;
	id2.style.background=c;
	id1.pv=id2.pv;
	id2.pv=s;
	
}

function help(){

	alert("Priortize your notes by choosing colors:\nRed: High priority\nYellow: Medium priority \nGreen: Low priority.");
}
