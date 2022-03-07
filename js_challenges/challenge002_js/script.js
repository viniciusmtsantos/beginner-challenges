function calculate() {
    let num = document.querySelector('input#num')
    let res = document.querySelector('div#res')
    let n = Number(num.value);
    if (num.value.length == 0) { // test for empty box
        res.innerHTML = `Please, insert a number to generate the table`
    } else {
        res.innerHTML = '<br>';
        for (let c = 1; c <= 10; c++)
            res.innerHTML += `• ${n} x ${c} = <strong>${n * c}</strong><br><br>`
    }

}