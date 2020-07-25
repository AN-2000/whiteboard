var note = document.querySelector(".stickyNote")

note.addEventListener("click",createSticky);

var noteFlag = 0




function createSticky(){
    var body = document.querySelector("body")
    const StickyPad = document.createElement("div")
    const writingPad = document.createElement("textarea")
    const min = document.createElement("div")
    const close = document.createElement("div")
    const nav = document.createElement("div")

    let isMin = false;

    min.addEventListener("click",function(e){
        var textArea = e.currentTarget.parentElement.parentElement.children[1]
        if(!isMin){
            isMin = true;
            textArea.style.display = "none"
        }else{
            isMin = false;
            textArea.style.display = "block"
        }
       
        
    })

    close.addEventListener("click",function(e){
        body.removeChild(StickyPad)
    })
    
    StickyPad.setAttribute("class","sticky2")
    close.setAttribute("class","close")
    min.setAttribute("class","min")
    writingPad.setAttribute("class","bottom")
    nav.setAttribute("class","top")

    nav.appendChild(min)
    nav.appendChild(close)
    StickyPad.appendChild(nav)
    StickyPad.appendChild(writingPad)
    body.appendChild(StickyPad)
    

    StickyPad.addEventListener("mousedown",mouseDown)
    StickyPad.addEventListener("mouseup",mouseUp)
    StickyPad.addEventListener("mousemove",mouseMove)

    let initialX = null
    let initialY = null
    let isDown = false
    function mouseDown(event){
        initialX = event.clientX
        initialY=event.clientY
        isDown = true 

    }

    function mouseUp(){
       isDown = false
    }

    function mouseMove(){
        if(!isDown)return;
        const StickyPad = event.currentTarget;
        let FinalX = event.clientX
        let FinalY = event.clientY
        let distX = FinalX-initialX
        let distY = FinalY-initialY

        let {top,left}=StickyPad.getBoundingClientRect();
        StickyPad.style.top = top+distY+"px";
        StickyPad.style.left = left+distX+"px"
        initialX = FinalX
        initialY = FinalY
    }



}