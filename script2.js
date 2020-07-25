var input = document.getElementsByTagName("input")[0]
var tasks = document.querySelector("#tasks")
var btn = document.getElementsByTagName("button")[0]


btn.addEventListener("click",addTask)


function addTask(){
    var li = document.createElement("li")
    li.innerHTML=`${input.value} <button type="button" class="close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>`
  li.style.listStyle="none"
    tasks.appendChild(li)
    var span = li.querySelector("span")
    span.addEventListener("click",removeLi)
}

function removeLi(event){
    var ul = event.target.parentElement.parentElement.parentElement
    var li = event.target.parentElement.parentElement
    ul.removeChild(li)
    
}



// agr kisi element pr eventlistener nhi h to uspr koi event occur hota h to wo upar jata rehta h parent tak jbtak wo consume nhi hojata use bubbling bolte h

// dom tree me jha khade ho use remove nhi kr sakte uske childs ko hi kr sakte h 
// attribute apni mrji se bhi kuch bhi nam ka dal sakte h