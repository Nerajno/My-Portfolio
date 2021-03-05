const message = " A Web Developer with a background in STEM education"

let index=0;
function writeMessage(){
    document.querySelector(".text-message").innerText= message.slice(0, index);
    index++;
}

setInterval(writeMessage, 200)


