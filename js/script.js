

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
            timer: 3000,
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
    var context = el.getContext("2d");
    context.moveTo(353, 393);
    context.bezierCurveTo(586, 436, 1044, 198, 1905, 18);
    context.bezierCurveTo(617, 530, 348, 777, 114, 644);
    context.bezierCurveTo(-126, 464, 183, 123, 290, 8);
    context.bezierCurveTo(181, 197, 202, 359, 353, 393);
    context.lineTo(353, 393);
    context.fill();  
    context.stroke();
    
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
    timer: 3000,
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
var signal = document.getElementById('cursor');
    signal.style.visibility="hidden";
    var signal1 = document.getElementById('cursor1');
    signal1.style.visibility="hidden";
function animationOn(){

    
  
    document.getElementById('anim1').classList.add('inner');
    setTimeout(function(){
    document.getElementById('anim1').classList.remove('inner');  
    
    }, 900);signal.style.visibility="hidden";
    signal1.style.visibility="hidden";}


function animationOff(){
    


    document.getElementById('moznost1').classList.remove('backgroundOn');
    document.getElementById('anim1').classList.add('innerrev');
    setTimeout(function(){
    document.getElementById('anim1').classList.remove('innerrev');
     document.getElementById('moznost1').classList.add('backgroundOn');
    }, 700);signal.style.visibility="visible";
    signal1.style.visibility="visible";}


   
    let colorInput = document.getElementById('colorpicker');
    let colorValue = colorInput.value;
   
    colorInput.addEventListener('input', () =>{

        var c = document.getElementById("BezierCurveCanvas");
        var context = c.getContext("2d");
        context.moveTo(353, 393);
        context.bezierCurveTo(586, 436, 1044, 198, 1905, 18);
        context.bezierCurveTo(617, 530, 348, 777, 114, 644);
        context.bezierCurveTo(-126, 464, 183, 123, 290, 8);
        context.bezierCurveTo(181, 197, 202, 359, 353, 393);
        context.lineTo(353, 393);
        context.fill();  
        context.stroke();
        context.strokeStyle = colorInput.value;
        context.fillStyle = colorInput.value;
    });
