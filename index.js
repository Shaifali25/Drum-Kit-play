/*document.querySelectorAll("button")[1].addEventListener("click", function(){
    alert("hi");
});*/




let drumKeys= document.querySelectorAll(".drum").length;

for( i=0; i<drumKeys; i++){
   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        

        this.style.color="green";// this func gives the identity of the clicked button


        var innerHTML= this.innerHTML;

        makeSound(innerHTML);
        makeAnimation(innerHTML);

        
    });
}

document.addEventListener("keydown", function(event){

    makeSound(event.key);

    makeAnimation(event.key);
});

function makeSound(key){
    switch (key){
        
            
            case "w":
                
                var audio= new Audio("sounds/tom-1.mp3");
                 audio.play();
                 break;


            case "a":

                var audio= new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
                
            case "s":

                var audio= new Audio("sounds/tom-3.mp3");
                audio.play();
                break;


           case "d":

                var audio= new Audio("sounds/tom-4.mp3");
                audio.play();
                break;


            case "j":

                var audio= new Audio("sounds/snare.mp3");
                audio.play();
                break;


            case "k":

                var audio= new Audio("sounds/crash.mp3");
                audio.play();
                break;

            case "l":

                var audio= new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            
            
            default:console.log(innerHTML);
                
        }

       

    };

    function makeAnimation(currentKey){

        var activeBtn= document.querySelector("."+ currentKey);
        activeBtn.classList.add("pressed");

        setTimeout(function(){
            activeBtn.classList.remove("pressed");
        },100);
    }


