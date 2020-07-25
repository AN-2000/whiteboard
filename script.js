// script.js
var d = document;
// to select an element from your document

var body = d.querySelector("body");
// css =>
body.style.backgroundColor = "#3498db";
// to create a element
var h1 = d.createElement("h1");
var p = d.createElement("p");
// set text inside an element
h1.textContent = "Heading created from Javascript"
h1.style.color="white"
p.textContent = "I am a Paragraph"
p.style.color = "#f1c40f"
// add a child to an element
body.appendChild(h1);
body.insertBefore(p,h1)

var myclass = body.getElementsByClassName("myclass")[0]   //ye ek array return krta h uska pehle element chahiye tumhe
myclass.style.height = "40vh"
myclass.style.width = "30wh"
myclass.style.backgroundColor="#2ecc71"

var aArray = body.getElementsByTagName("a")   //yhapr body and d dono islie chlra h kuki tree me body ke ander hi anchor h
for(var i =0;i<aArray.length;i++){
    aArray[i].setAttribute("class","anchorColor")
}

var anchor = d.querySelectorAll("a")

console.log(anchor)
for(var i=0;i<anchor.length;i++){
    
anchor[i].addEventListener("click",function(e){   
    e.preventDefault()
    console.log(e.target.getAttribute("value"))
})
}

// anchor[i] ko addEventListener ke ander getAttribute se nhi kra kuki jb for loop marte h to wo pehchan nhi pata undefined hojata h islie e jo event h uske .target hota h jo btata h kisne kra event launch to uspr lgado getAttribute
// loop ekbar chalega to wo sabpr lgadega but jb click krenge to loop nhi chalega to aArray[i] undefined hoga

// fastest selectors
// getElementsById>querySelector>getElementsByTagName>querySelectorAll