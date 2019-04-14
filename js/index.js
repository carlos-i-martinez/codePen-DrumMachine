//react to the keyboard also.
$(document).on("keydown",function(event){

  myFunction(event.which);
});

//function to changle display and sound.
function myFunction(e) {
  switch(e) {
         case 81:
                  document.getElementById('Q').play();
                  document.getElementById('display').innerHTML = "That's a BOOM.";        
                  break;
         case 87:
                  document.getElementById('W').play();
                  document.getElementById('display').innerHTML = "That's a CLAP.";
                  break;
         case 69:
                  document.getElementById('E').play();
                  document.getElementById('display').innerHTML = "That's a HIHAT.";
                  break;
         case 65:
                  document.getElementById('A').play();
                  document.getElementById('display').innerHTML = "That's a KICK.";
                  break;
         case 83:
                  document.getElementById('S').play();
                  document.getElementById('display').innerHTML = "That's a OPENHAT.";
                  break;
         case 68:
                  document.getElementById('D').play();
                  document.getElementById('display').innerHTML = "That's a RIDE.";
                  break;
         case 90:
                  document.getElementById('Z').play();
                  document.getElementById('display').innerHTML = "That's a SNARE.";
                  break;
         case 88:
                  document.getElementById('X').play();
                  document.getElementById('display').innerHTML = "That's a TINK.";
                  break;
         case 67:
                  document.getElementById('C').play();
                  document.getElementById('display').innerHTML = "That's a TOM.";
                  break;
   }
}