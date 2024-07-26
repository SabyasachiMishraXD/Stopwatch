let reset_btn = document.querySelector(".resetValue");
let id = document.getElementById("countDown");

//start the timer
let count = 0;
let idSet;
const startHandler = () => {
        idSet = setInterval(()=>{
        countDown.innerText = count++
    }, 1000);
    return idSet
    
}

//reset the timer.
const resetHandler = () => {
    count = 0;
   countDown.innerText = count;
   clearInterval(idSet); 
}


//stop the timer
const stopHandler = () => {
    clearInterval(idSet);
}

//display current time in stopwatch
const timeHandler = () =>{
    let newP = document.createElement("p")
    newP.innerText = `Time is ${count-1}`
    reset_btn.append(newP)

}
//clear the display
const clearHandler = () =>{
    reset_btn.innerHTML = "";
    count = 0;
    countDown.innerText = count;
    clearInterval(idSet);  //stop the timer if it's running.
 
}


document.querySelector(".start_btn").addEventListener("click", startHandler);
document.querySelector(".reset_btn").addEventListener("click", resetHandler);
document.querySelector(".stop_btn").addEventListener("click", stopHandler);
document.querySelector(".time_btn").addEventListener("click", timeHandler);
document.querySelector(".clear_btn").addEventListener("click", clearHandler);
