   function toggleImage1(){
  document.getElementById('moznost1').checked=!document.getElementById('moznost1').checked
  }
  
  function toggleVisibility(id) {
    var el = document.getElementById(id);
    if(document.getElementById('moznost1').checked){
        Swal.fire({
            title: "WARNING!", 
            html: "Open the TV first", 
            confirmButtonColor: '#A2C4E0', 
            confirmButtonText: "OK",      
          });
    }
    else{
    if (el.style.visibility=="visible") {
           el.style.visibility="hidden";
      }
      else {
           el.style.visibility="visible";
      }
  }}

 function toggleSvg(){
    
    var el = document.getElementById('svgslika1');

    if(document.getElementById('moznost1').checked)
        el.style.visibility="hidden";

    else if(document.getElementById('zapri').clicked)
        el.style.visibility="hidden";

    else if(document.getElementById('powerbtn').clicked)
        el.style.visibility="hidden";
 }

function toggleImage(){
    
    var el = document.getElementById('nikelogo');

    if(document.getElementById('moznost1').checked)
        el.style.visibility="hidden";

    else if(document.getElementById('zapri').clicked)
        el.style.visibility="hidden";

    else if(document.getElementById('powerbtn').clicked)
        el.style.visibility="hidden";
        
        
 }

 function toggleBezier(){
    var el = document.getElementById('BezierCurveCanvas');

    if(document.getElementById('moznost1').checked)
        el.style.visibility="hidden";

    else if(document.getElementById('zapri').clicked)
        el.style.visibility="hidden";

    else if(document.getElementById('powerbtn').clicked)
        el.style.visibility="hidden";
 }
 function hideImage1(){

    var el = document.getElementById('nikelogo');
    el.style.visibility="hidden";

    var ba = document.getElementById('BezierCurveCanvas');
    ba.style.visibility="hidden";

 }

 function hideImage2(){

    var el = document.getElementById('svgslika1');
    el.style.visibility="hidden";

    var ba = document.getElementById('BezierCurveCanvas');
    ba.style.visibility="hidden";

 }

 function hideImage3(){

    var el = document.getElementById('svgslika1');
    el.style.visibility="hidden";

    var lu = document.getElementById('nikelogo');
    lu.style.visibility="hidden";

 }

 function creditsBy(){
 Swal.fire({
    title: 'Credits by Dilan Mužič',
    confirmButtonColor: '#A2C4E0', 
    confirmButtonText: "CLOSE", 
    showClass: {
      popup: 'animate__animated animate__fadeInLeft'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutRight'
    }
  })}

  var playaudioone = new Audio("sound/audio1.mp3");
  var playaudiotwo = new Audio("sound/audio2.mp3");
  var playaudiothree = new Audio("sound/audio3.mp3");
  function playaudioone(){
      playaudioone.play();
  }
  function playaudiotwo(){
    playaudiotwo.play();
}
function playaudiothree(){
    playaudiothree.play();
}

function toggleonoff(){

    if(document.getElementById('moznost1').checked){
             animationOn();
          
    }else{
             animationOff();}

}

function animationOn(){

  
    document.getElementById('anim1').classList.add('inner');
    setTimeout(function(){
    document.getElementById('anim1').classList.remove('inner');  
    
    }, 900);}


function animationOff(){

    document.getElementById('moznost1').classList.remove('backgroundOn');
    document.getElementById('anim1').classList.add('innerrev');
    setTimeout(function(){
    document.getElementById('anim1').classList.remove('innerrev');
     document.getElementById('moznost1').classList.add('backgroundOn');
    }, 700);}

