function addMemo(){
	var memoText=document.getElementById('memoText').innerHTML;
	if(memoText=='')
		alert("Pls Enter Some Text");
	else {
	var mc=document.getElementById('memo_container');
    var divElement=document.createElement('div');
    divElement.className='text_container';
    
    divElement.innerHTML="<div class='btn'><input class='eBtn' type='button' value='Edit' onClick='edit(this);'> <input class='rmBtn' type='button' value='Remove' onClick='rem(this);'></div>";
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

