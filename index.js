for(var i=0;i<document.querySelectorAll(".drum").length;i++)

        // BUTTON PRESS

document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML=this.innerHTML;
   
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});

        // KEY PRESS 

document.addEventListener("keypress",function(event){

makesound(event.key);
buttonAnimation(event.key);

});

function makesound(key){


    switch(key){
        case "w":
        var audio1 = new Audio('sound/tom-1.mp3');
        audio1.play();
        break;
 
        case "a":
        var audio2 = new Audio('sound/tom-2.mp3');
        audio2.play();
        break;
 
        case "s":
        var audio3 = new Audio('sound/tom-3.mp3');
        audio3.play();
        break;
 
        case "d":
        var audio4 = new Audio('sound/tom-4.mp3');
        audio4.play();
        break;
    
        case "j":
        var audio5 = new Audio('sound/snare.mp3');
        audio5.play();
        break;
 
        case "k":
         var audio6= new Audio('sound/crash.mp3');
         audio6.play();
         break;
 
         case "l":
         var audio7= new Audio("sound/kick-bass.mp3");
         audio7.play();
         break;
         
         
         default:
 
    
     }
}

           // ANIMATION

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){

    activeButton.classList.remove("pressed");
    }, 100);

}