// document.getElementById('parrot').onclick = () => {
//     alert("Parrot");
// }

//Better Approach

// let Parrot = document.getElementById('parrot');

// Parrot.addEventListener('click',()=>{
//     alert("This is Parrot");
// })

// Parrot.addEventListener('click',(e)=>{
//     console.log(e);    
// })

//type.timestamp,defaultPrevented.target,toElement,srcElement
//clientX,clientY,currentTarget,screenX,screeenY,altKey,ctrlKey,shiftKey,keyCode


//Event Propagation

// in false bubblingum from bottom to up and false is default behaviour

// document.getElementById('images').addEventListener('click',()=>{
//     console.log('clicked inside ul');    
// },false);

// document.getElementById('rabbit').addEventListener('click',(e)=>{
//     console.log('rabbit Clicked');
//     //to Stop the bubbling o f element
//     e.stopPropagation();
// },false);

//When we clicked any of image except rabbit image the log will be 'cliked inside ul'  but when we clicked rabbit log will be "rabbit clicked then clicked inside ul" due to line 23 behaviour

// in true capturing from Up to bottom

// document.getElementById('images').addEventListener('click',()=>{
//     console.log('clicked inside ul');    
// },true);

// document.getElementById('rabbit').addEventListener('click',()=>{
//     console.log('rabbit Clicked');    
// },true);

//When we clicked any of image except rabbit image the log will be 'cliked inside ul'  but when we clicked rabbit log will be "clicked inside ul then rabbit clicked" due to line 35 behaviour


// Cosider a case where we dont want to propagate link in link of google we dont want to it propagated to google page so we can its deafult behaviour

// document.getElementById('google').addEventListener('click',function(e){
//     e.preventDefault();
// })



//Task =>

    // when we click to the image it get disappeared
    document.getElementById('images').addEventListener('click',function(e){
        // console.log(e.target.parentNode.innerHTML);
        // e.target.parentNode.innerHTML = "";

        if(e.target.tagName === "IMG") {
            const removeElement = e.target.parentNode;
            // console.log(removeElement.tagName);
            removeElement.remove();
        }
        // removeElement.parentNode.removeChild(removeElement);
             
    })