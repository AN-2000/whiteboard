var download = document.querySelector(".download")

download.addEventListener("click",function(){
    const anchor = document.createElement("a");
    anchor.href = board.toDataURL();
    anchor.download = "img.png";
    anchor.click();
    body.appendChild(anchor);
    body.removeChild(anchor);
})