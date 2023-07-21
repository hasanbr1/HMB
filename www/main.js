var x=document.getElementById("pic");
var j=1;
var m=5000;
var y = document.querySelectorAll(".art");
var t = document.querySelectorAll(".eks");
var z = [document.getElementById("con1"), document.getElementById("con2"), document.getElementById("con3")];
var s = [document.getElementById("pi1"), document.getElementById("pi2"), document.getElementById("pi3")];
var divd = [document.getElementById("winter2"), document.getElementById("summer2"), document.getElementById("city2")];
var divm = [document.getElementById("winter"), document.getElementById("summer"), document.getElementById("city")];
var divHB = document.querySelectorAll(".details");
var divVB = document.querySelectorAll(".details2");

for (var i = 0; i < y.length; i++) {
    (function(m) {
        y[i].addEventListener("click", function(event) {
            var clickedNodeIndex = Array.from(y).indexOf(event.target);
            m++;
            z[clickedNodeIndex].value = m;
            s[clickedNodeIndex].value = m * 50;
        });

        t[i].addEventListener("click", function(event) {
            var clickedNodeIndex1 = Array.from(t).indexOf(event.target);

            if (m <= 0) {
                m = 0;
            } else {
                m--;
            }

            z[clickedNodeIndex1].value = m;
            s[clickedNodeIndex1].value = m * 50;
        });
    })(0); 
}

setInterval(() => {
     
    x.style.background="url(p"+j+".jpg)";
       j++;
       if(j>6)
        j=1;
       
}, 7000);



const newspaperTiming = {
    duration: 1000,
    iterations: 2,
    
  };
  const ant =[
    { transform: "rotateY(0) scale(1)" },
    { transform: "rotateY(180deg) scale(0.5)" },
    { transform: "rotateY(0) scale(1)" },

   
    
  
];
for (var i = 0; i < divHB.length; i++) {
  {
        divHB[i].addEventListener("click", function(event) {
            var clickedNodeIndex = Array.from(divHB).indexOf(event.target);
          

            divm[clickedNodeIndex].animate(ant,newspaperTiming);
            setTimeout(function(){
            
                divm[clickedNodeIndex].style.display = 'none';
                divd[clickedNodeIndex].style.transition = "all 2s";
                divd[clickedNodeIndex].style.display='block';
            }, 800); 
        });
        divVB[i].addEventListener("click", function(event) {
            var clickedNodeIndex = Array.from(divVB).indexOf(event.target);
          

            divd[clickedNodeIndex].animate(ant,newspaperTiming);
            setTimeout(function(){
            
                divd[clickedNodeIndex].style.display = 'none';
                divm[clickedNodeIndex].style.transition = "all 2s";
                divm[clickedNodeIndex].style.display='block';
            }, 800); 
        });

  
    }
}





    


