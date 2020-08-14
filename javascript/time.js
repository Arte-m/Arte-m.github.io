const time = document.getElementById('time')

// Function show time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds()


    time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec}`

    setTimeout(showTime, 1000)
}
showTime()

