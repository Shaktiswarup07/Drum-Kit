
// document.querySelector(".w").addEventListener("click",handClick)


function fun(ch){
    switch(ch){
        case 'w':
           var tom1=new Audio("sounds/tom-1.mp3");
           tom1.play();
           break;
        case 'a': 
           var tom2=new Audio("sounds/tom-2.mp3");
           tom2.play();
           break;
        case 's':
           var tom3=new Audio("sounds/tom-3.mp3");
           tom3.play();
           break;
        case 'd':
           var tom4=new Audio("sounds/tom-4.mp3");
           tom4.play();
           break;
        case 'j':
           var snare=new Audio("sounds/snare.mp3");
           snare.play();
           break;
        case 'k':
           var crash=new Audio("sounds/crash.mp3");
           crash.play();
           break;
        case 'l':
           var kickbass=new Audio("sounds/kick-bass.mp3");
           kickbass.play();
           break;
        default: console.log(ch);

    }
}



//DETECTING KEYBOARD PRESS
document.addEventListener("keypress",function(event){
    // console.log(event);
    // alert("key was pressed!");
    fun(event.key);
    buttonAnimation(event.key);
    
});

//DETECTING BUTTON PRESS
for(var i = 0; i < 7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handClick);

}
function handClick(){

    // this.style.color="white";
    // console.log(this.innerHTML);
    var buttonInnerHtml=this.innerHTML;
    fun(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
    
}

//ADDING ANIMATIONS TO WEBSITE
function buttonAnimation(currentKey){
   var activeButton= document.querySelector("."+currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function(){
    activeButton.classList.remove("pressed");
   },100);
    // document.querySelector("."+currentKey).style.toggle("color");

}










//Adding Sounds to Website
    // var audio=new Audio('sounds/tom-1.mp3'); 
    // audio.play();

    