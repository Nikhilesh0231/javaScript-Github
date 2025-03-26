// document.getElementById('parrot').onclick = () => {
//     alert("Parrot");
// }

//Better Approach

let Parrot = document.getElementById('parrot');

Parrot.addEventListener('click',()=>{
    alert("This is Parrot");
})

Parrot.addEventListener('click',(e)=>{
    console.log(e);    
})

//type.timestamp,defaultPrevented.target,toElement,srcElement
//clientX,clientY,currentTarget,screenX,screeenY,altKey,ctrlKey,shiftKey,keyCode


//Event Propagation

// in false bubblingum from bottom to up and false is default behaviour

document.getElementById('images').addEventListener('click',()=>{
    console.log('clicked inside ul');    
},false);

document.getElementById('rabbit').addEventListener('click',()=>{
    console.log('rabbit Clicked');    
},false);

//When we clicked any of image except rabbit image the log will be 'cliked inside ul'  but when we clicked rabbit log will be "rabbit clicked then clicked inside ul" due to line 23 behaviour