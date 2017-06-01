

function addMemo(){
	var memoText=document.getElementById('memoText').value;
	if(memoText=='')
		alert("Pls Enter Some Text");
	else {
	var mc=document.getElementById('memo_container');
    var divElement=document.createElement('div');
    divElement.className='text_container';
    
    divElement.innerHTML="<div class='btn'><input class='eBtn' type='button' value='Edit' onClick='edit(this);'> <input class='rmBtn' type='button' value='Remove' onClick='rem(this);'> <hr/> </div>";
    divElement.innerHTML+=memoText;
    mc.appendChild(divElement);
}

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
}


function rem(id){

var x=id.parentElement.parentElement;
x.parentNode.removeChild(x);
}
