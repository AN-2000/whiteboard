var fileSelector = document.querySelector("#fileSelector")
var fileInput = document.querySelector("#fileInput")
var body = document.querySelector("body")
fileSelector.addEventListener("click",function(e){
    e.preventDefault();
    fileInput.click()
})

fileInput.addEventListener("change",function(e){
    const file =e.currentTarget.files[0]
    const img = document.createElement("img")
    img.src=window.URL.createObjectURL(file)
    img.setAttribute("class","imgStyle")
    img.onload=function(){
        window.URL.revokeObjectURL(this.src)
    }
   
    var imgLayout = document.createElement("div")
    var topBar = document.createElement("div")
    var close = document.createElement("div")
    close.setAttribute("class","close")
    topBar.setAttribute("class","top")
    imgLayout.setAttribute("class","sticky2")
    topBar.appendChild(close)
    imgLayout.appendChild(topBar)
    imgLayout.appendChild(img)
    body.appendChild(imgLayout)

    close.addEventListener("click",function(e){
        body.removeChild(imgLayout)
    })


    imgLayout.addEventListener("mousedown",mouseDown)
    imgLayout.addEventListener("mouseup",mouseUp)
    imgLayout.addEventListener("mousemove",mouseMove)

    let initialX = null
    let initialY = null
    let isDown = false
    function mouseDown(event){
        initialX = event.clientX
        initialY=event.clientY
        isDown = true 

    }

    function mouseUp(event){
        var rect = event.currentTarget.getBoundingClientRect();
        console.log(rect)
        ctx.drawImage(img, rect.x, rect.y-board.getBoundingClientRect().y,500,300);
       isDown = false
    }

    function mouseMove(){
        if(!isDown)return;
     imgLayout = event.currentTarget;
        let FinalX = event.clientX
        let FinalY = event.clientY
        let distX = FinalX-initialX
        let distY = FinalY-initialY

        let {top,left}=imgLayout.getBoundingClientRect();
        imgLayout.style.top = top+distY+"px";
        imgLayout.style.left = left+distX+"px"
        initialX = FinalX
        initialY = FinalY
    }

})