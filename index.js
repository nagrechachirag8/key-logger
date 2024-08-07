const logger = document.getElementById("logger-container")
const startBtn = document.getElementById("start-btn")
const stopBtn = document.getElementById("stop-btn")

startBtn.addEventListener('click',()=> {
    document.addEventListener('keydown',handleDown)
    startBtn.disabled = true;
    stopBtn.disabled = false;
})

stopBtn.addEventListener('click',()=> {
    document.removeEventListener('keydown',handleDown);
    logger.textContent = "";
    startBtn.disabled = false;
    stopBtn.disabled = true;
})

function handleDown(e){
    logger.textContent = `Key ${e.key} pressed`
}