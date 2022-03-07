function timeDay() {
    let res = document.getElementById('txt')
    let image = document.getElementById('image')
    let dt = new Date()
    let hr = dt.getHours()
    res.innerHTML = `• Now, it´s close to ${hr}h o'clock.<br>`
    if (hr >= 0 && hr < 12) { // for morning
        image.src = '2.png'
        res.innerHTML += `<br><strong>Good Morning!</strong>`
        document.body.style.background = 'pink'
    } else if (hr >= 12 && hr < 18) {
        image.src = '3.png'
        res.innerHTML += `<br><strong>Good Afternoon!</strong>`
        document.body.style.background = 'orange'
    } else {
        image.src = '1.png'
        res.innerHTML += `<br><strong>Good Night!</strong>`
        document.body.style.background = 'gray'
    }
}