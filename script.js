let additem=document.querySelector("#additem")
let button=document.querySelector("#btn")
  let list=document.querySelector(".list")
  let arrlist=[]

  let getdata = () => {
       let data = JSON.parse(localStorage.getItem("todolist"));
       return Array.isArray(data) ? data : [];
   }
   let addtodolocalstroage=(todo)=>{
   return localStorage.setItem("todolist",JSON.stringify(todo))
}

button.addEventListener("click",(e)=>{
   e.preventDefault()
   todolist()
})


let todolist=()=>{
   let value=additem.value.trim()
  additem.value=""
   arrlist=getdata()
if(value.length!=0&& !arrlist.includes(value)){
   
   arrlist.push(value)
   arrlist=[...new Set(arrlist)]
  
   addtodolocalstroage(arrlist)
    
   let lielement=document.createElement("li");
   lielement.innerHTML=value;
   list.append(lielement);

}
}

let showdata=()=>{
   arrlist=getdata()
   arrlist.forEach((item)=>{
       let lielement=document.createElement("li");
   lielement.innerHTML=item;
   list.append(lielement);
   })
}

showdata()

let removelist=(e)=>{

let update=arrlist.filter((current)=>
current!==e.target.textContent)
addtodolocalstroage(update)
let del=e.target
del.remove()

}

list.addEventListener("click",removelist)