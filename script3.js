
var s = 0
var activeTool = "none"
var canvas = board.getBoundingClientRect();
var eraser = document.querySelector("#eraser")
var pencil = document.querySelector("#pencil")
var pencilOptns = document.querySelector(".pencil-options")
var eraserOptns = document.querySelector(".eraser-options")
var EraserSlider = document.querySelector("#EraserSlider")
var PencilSlider = document.querySelector("#PencilSlider")
var undo = document.querySelector(".undo")
var redo = document.querySelector(".redo")
var undoStack = []
var redoStack = []

pencil.classList.add("active")

function changeWidth(value,tool){
    ctx.lineWidth = value;
    
}

eraser.addEventListener("click",function(){

    // ctx.strokeStyle = "white"
    ctx.globalCompositeOperation = "destination-out";
    if(activeTool!="eraser"){
        
        ctx.lineWidth = "2"
        eraser.classList.add("active")
        pencil.classList.remove("active")
        pencilOptns.classList.remove("show")
        activeTool="eraser"
    }else if(activeTool=="eraser" && !eraserOptns.classList.contains("show")){
        eraserOptns.classList.add("show")
        console.log("eraser")
    }else{
        eraserOptns.classList.remove("show")
        eraser.classList.remove("active")
        activeTool= "none";
    }
    
    
})

pencil.addEventListener("click",function(){
    // ctx.strokeStyle = "red"
    
    if(activeTool!="pencil"){
        ctx.lineWidth = "2"
        ctx.strokeStyle = "red"
        ctx.globalCompositeOperation = "source-over"
        pencil.classList.add("active")
        eraser.classList.remove("active")
        eraserOptns.classList.remove("show")
        activeTool= "pencil";
    }else if(activeTool=="pencil" && !pencilOptns.classList.contains("show")){
        pencilOptns.classList.add("show")
    }else{
        pencilOptns.classList.remove("show")
       pencil.classList.remove("active")
       activeTool= "none";
    }

    

})

board.addEventListener("mousedown",function(e){
    pencilOptns.classList.remove("show")
    
    ctx.beginPath()
    ctx.moveTo(e.clientX,e.clientY-canvas.top)

  s =1;

  const point = {
      x : e.clientX,
      y : e.clientY-canvas.top,
      width : ctx.lineWidth,
      color:ctx.strokeStyle,
      effect:ctx.globalCompositeOperation,
      type:"begin"
  }
  undoStack.push(point)
})

board.addEventListener("mousemove",function(e){
    
    if(s == 1){
        ctx.lineTo(e.clientX,e.clientY-canvas.top)
        ctx.stroke()

        const point = {
            x : e.clientX,
            y : e.clientY-canvas.top,
            width : ctx.lineWidth,
            color:ctx.strokeStyle,
            effect:ctx.globalCompositeOperation,
            type:"end"
        }
        undoStack.push(point)
    }
    
})


board.addEventListener("mouseup",function(e){
    console.log("fsdfsdhfbsksdbaskdbakjs")
    ctx.closePath()
    s=0;
})

function penColor(c){
ctx.strokeStyle = c;
}

let interval = null;

undo.addEventListener("mousedown",function(){
   
    interval = window.setInterval(function(){
        if(undoStack.length!=0){
            redoStack.push(undoStack.pop())
            reDraw()
        }
       
    },20)
    
    
    
})

undo.addEventListener("mouseup",function(){
    clearInterval(interval)
    interval = null;
})

function reDraw(){
    ctx.clearRect(0,0,board.width,board.height)
    for(i = 0;i<undoStack.length;i++){
        let {x,y,width,color,effect,type} = undoStack[i]
        if(type==="begin"){
            ctx.lineWidth = width
            ctx.strokeStyle = color
            ctx.globalCompositeOperation = effect
            ctx.beginPath()
            ctx.moveTo(x,y)

        }else if(type==="end"){
            ctx.lineWidth = width
            ctx.strokeStyle = color
            ctx.globalCompositeOperation = effect
            ctx.lineTo(x,y)
            ctx.stroke()
        }
    }
    
}

redo.addEventListener("mousedown",function(){
    interval=window.setInterval(function(){
        if(redoStack.length!=0){
            undoStack.push(redoStack.pop())
            reDraw()
        }
        
    },20)
    
})

redo.addEventListener("mouseup",function(){
    clearInterval(interval)
    interval = null
})
