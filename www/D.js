var a=document.getElementById("hi");
var b=document.getElementById("hh");
var c=document.getElementById("by");
var d=document.getElementById("hb");

b.addEventListener("click",f);
d.addEventListener("click",f1);

const x =[
    { transform: "rotateY(0) scale(1)" },
    { transform: "rotateY(180deg) scale(0.5)" },
    { transform: "rotateY(0) scale(1)" },
   
];

const newspaperTiming = {
    duration: 1000,
    iterations: 2,
    
  };
  const y =[
    { transform: "rotateX(0deg) scale(1)" },
    { transform: "rotateY(180deg) scale(0.75)" },
    { transform: "rotateX(180deg) scale(0.5)" },
    { transform: "rotateX(0deg) scale(1)" },
    

   
    
  
];

const newspaperTiming1 = {
    duration: 1200,
    iterations: 1,
    
  };

function f(){
    a.animate(x,newspaperTiming);
    setTimeout(function(){
    
    a.style.display = 'none';
    c.style.transition = "all 2s";
    c.style.display='block';
    }, 800); 
   
}
function f1(){
    a.animate(y,newspaperTiming1);
    setTimeout(function(){
    c.style.display = 'none';
    a.style.display='block';
    }, 800); 
   
}



    

