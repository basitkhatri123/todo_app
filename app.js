
var list=document.getElementById("list")

function additems(){


    if(document.getElementById('todo').value===''){

        alert("please input some text")


    }

    else{

    var inputitems=document.getElementById('todo');
    var para=document.createElement('li')
    var text=document.createTextNode(inputitems.value);
    para.appendChild(text);
  
    var deletebtn=document.createElement('button');
    var btnname=document.createTextNode('Delete');
    deletebtn.appendChild(btnname);
    deletebtn.setAttribute('class','delbtn');
    deletebtn.setAttribute('onClick','deleteitem(this)');

    para.appendChild(deletebtn);

    var editbtn=document.createElement('button');
    var btnname2=document.createTextNode('Edit');
    editbtn.appendChild(btnname2);
    editbtn.setAttribute('class','editbtn');
    editbtn.setAttribute('onClick','edititem(this)');
    para.appendChild(editbtn);


    list.appendChild(para); 
    inputitems.value="";

    }

}


function deleteall(){

     list.innerHTML="";

}



function deleteitem(e){

    e.parentNode.remove();

}


function edititem(e){

var val=e.parentNode.firstChild.nodeValue;
var editval=prompt("Enter value to edit",val);

if(editval===""){


    alert("Please fill the item")
}
else{

e.parentNode.firstChild.nodeValue=editval;

}

}