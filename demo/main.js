

var button=document.querySelector(".btn")
var button2=document.querySelector(".btn2")
button.addEventListener("click", function(){
    var inp1=document.querySelector("#name1")
    var inp2=document.querySelector("#name2")
    var p=document.querySelector('#love');
    var pOpinion=document.querySelector("#opinion")
    var pWelcome=document.querySelector("#welcome")
    var hiddenp=document.getElementById('hidden')
   
   
     /*  if(inp1=='kawsar' || inp2=='ahmed'){
          alert(77)
       } else{
           
       }
   */
   
   if(inp1.value==''|| inp2.value==''){
       if(inp1.value==''&& inp2.value==''){
        hiddenp.innerHTML="please write your and partner's name"
          hiddenp.style.visibility='visible'
           
       }else if (inp2.value==''){
           hiddenp.innerHTML = "please write your partner's name"
           hiddenp.style.visibility = 'visible'
           
       }else if(inp1.value==''){
           hiddenp.innerHTML = "please write your name"
           hiddenp.style.visibility = 'visible'
       }else{
           alert(6)
       }
   }else{
       var ran = random(50, 99)
       p.innerHTML = ran
       $('#love').counterUp({
           delay: 10,
           time: 2000
       })
       setTimeout(opinion,3000)
       hiddenp.style.visibility = 'hidden'
   }
   
   
       
        
        
      //  setTimeout(clear,10000)
        
     
        
        
        
    function random(min, max) {
        return ~~(Math.random() * (max - min + 1) + min);
    }
    function clear(){
        inp1.value=''
        inp2.value=''
    }
    
    
    
    function opinion(){
        function msg(){
            return `${inp1.value} ♥️ ${inp2.value}`
        }
        
            welcome.innerHTML=`${inp1.value} Loves ${inp2.value} ${ran} ℅`;
            pOpinion.innerHTML=msg()
            
        
    }
    
    
   
    
    
})

button2.addEventListener("click", function(){
 // button2.toggleClass("down")
 // button2.classList.toggle("down")
  button2.classList.add('down')
})




$(".rotate").click(function () {
    $(this).toggleClass("down");
    var inp1=document.querySelector("#name1")
    var inp2=document.querySelector("#name2")
    var p = document.querySelector('#love');
    var pOpinion = document.querySelector("#opinion")
    var pWelcome = document.querySelector("#welcome")
    var hiddenp = document.getElementById('hidden')
    
    setTimeout(refresh,1000)
    
    
    function refresh(){
      inp1.value=''
      inp2.value=''
      p.innerHTML='0'
      pOpinion.innerHTML=''
      pWelcome.innerHTML=''
      hiddenp.innerHTML=''
    }
    
    
})


function clear(){
  
}