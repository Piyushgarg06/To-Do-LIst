let input = document.querySelector(".task-Input")
let btn = document.querySelector(".add")
let list = document.querySelector(".list")
let span = document.querySelector("span")




function addTask(){
    if(input.value===""){
        alert("You need to enter a task before adding it!")
    }else{
        let li = document.createElement("li")
        li.innerHTML= input.value
        list.appendChild(li)  
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
        input.value=""
        span.addEventListener("click",()=>{
            list.removeChild(li)
    
        })
        li.addEventListener("click",()=>{
            li.classList.toggle("checked")
        })
        


    }


    }

btn.addEventListener("click",addTask)
input.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
        addTask()
    }
})




