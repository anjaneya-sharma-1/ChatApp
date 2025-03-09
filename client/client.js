const socket = io("http://localhost:5000");


const form = document.getElementById("message-container");
const container=document.querySelector(".container");
socket.on("content",(message)=>{
    addContent(message,"left");
});
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    message=form.querySelector("input").value;
    form.querySelector("input").value = "";
    socket.emit("send",message);
    addContent(`You: ${message}`,"right");
})


function addContent(content,position){
    const contentElement=document.createElement("div");
    contentElement.innerText=content;
    contentElement.classList.add("content");
    contentElement.classList.add(position); 
    container.append(contentElement);
}

socket.on("connect",()=>{
    console.log("connected");
    const name=prompt("enter name");
    socket.emit("name", name);
});
