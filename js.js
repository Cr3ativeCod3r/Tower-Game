
let blc = 3; 
let bot = 0;
let clicked = new Array();
let blockk=0;
let wsk =0;
let press=1;
var win=new Audio('cr.wav');
var lose=new Audio('fl.ogg');

document.addEventListener("keydown", function(event) {
    if (event.key === "r" && press==1) {
      spawn();
    }
  });

function spawn() 
      {
        press=0;
        wsk=62;
        let wskaznik = document.getElementById(wsk).classList.replace("ps", "psn");
        let box = document.getElementById("box");

      //reset
        blc=3;
        box.innerHTML="";
        clicked = new Array();
        bot=0;
        blockk=0;
      //reset
       
        let p =0;
        let k =2
        let c=0;
        let los=0;
        let special=0;
        let block=35;  
        for (let i = 0; i < 36; i++)
         {
      
        if(c%3==0)
        {
         special = Math.round(Math.random() * (k - p) + p);
         p=p+3;
         k=k+3;
         console.log(p+"-"+k+"a c to "+c+"reszta"+c%3)
        }
        if
        (los==special)
        {
            box.innerHTML += '<div id='+block+' class="die" onclick="check('+block+')"> <img id='+(block+1)*100+' class="jus" src="bomb.png">?</div>';
            
        } else{box.innerHTML += '<div id='+block+' class="pie" onclick="check('+block+')">?</div>';} 
           
          c++;
          los++;
          block--;
         
      }

    }

function check(x) 
{
    let element = document.getElementById(x);
    let imgg = document.getElementById((x+1)*100);
    if(x>32)
    {
        let win = document.getElementById("box").innerHTML = '<p id="win">WIN!!</p>';
        press=1;
    }

    if (x < blc && x >= bot) {
        if (element) {
            if (element.classList.contains("pie") && blockk==0) 
            {
                win.currentTime = 0;
                win.play();
                element.classList.replace("pie", "ok");
                element.innerHTML = "";
                clicked.push(x);
                blc+=3
                bot+=3
                let ten = document.getElementById(wsk).classList.replace("psn", "ps");
                wsk--;;
                let nastepny = document.getElementById(wsk).classList.replace("ps", "psn");
               
            } 
            else if (element.classList.contains("die")&& blockk==0) 
            {
                lose.play();
                let czysc= document.getElementById(wsk).classList.replace("psn", "ps");
                blockk=1;
                element.innerHTML = '<img  class="jus2" src="bomb.png">';
                element.classList.replace("die", "no");
                clicked.push(x);
                imgg.classList.replace("jus", "jus2");
                blc+=3
                bot+=3
                setTimeout(clearr, 1000);
            }
        }
    }
}


function clearr()
{ 
  press=1;
    for (let i = 0; i < 36; i++) {

      let element = document.getElementById(i); 
      let imgg = document.getElementById((i + 1) * 100);
    
      if (element.classList.contains("pie") && !clicked.includes(i)) {
        element.classList.replace("pie", "ok");
        element.innerHTML = "";
     } 

      if (element.classList.contains("ok") && clicked.includes(i)) {
        element.classList.replace("ok", "cl");
        element.innerHTML = "";
      
      }
      if (element.classList.contains("no") && clicked.includes(i)) {
        element.classList.replace("no", "clr");
        element.innerHTML = '<img  class="jus2" src="bomb.png">';
      
      }
      if (element.classList.contains("die")) {
        element.classList.replace("die", "no");
        imgg.classList.replace("jus", "jus2");
        element.innerHTML = '<img  class="jus2" src="bomb.png">';
      }
    }
}


