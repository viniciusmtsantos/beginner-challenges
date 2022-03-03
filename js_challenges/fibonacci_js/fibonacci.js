let x = document.querySelector('input#inicial');
let y = document.querySelector('input#final');
let res = document.querySelector('div#res');
let lista = [];

function isFibonacci(num) {
    if ((Math.sqrt(5 * (num * num) - 4)) % 1 === 0 || (Math.sqrt(5 * (num * num) + 4)) % 1 === 0) {
        return true;
    } else {
        return false;
    }
}

function fibonacci() {
    if (x.value.length == 0 || y.value.length == 0) { // 
        res.innerHTML = 'Preencha todos os dados solicitados, por favor.'
    } else {
        let i = Number(x.value);
        let f = Number(y.value);
        if (isFibonacci(i) == true && isFibonacci(f) == true) {
            res.innerHTML = 'Ambos os valores fazem parte da sequência de Fibonacci. <strong>A sequencia é:</strong>';
            for (let c = i; c <= f; c++) {
                if (isFibonacci(c) == true) {
                    lista.push(Number(c))
                    //    res.innerHTML += `${c}, `;
                } else {
                    res.innerHTML += ``;
                }
            }
            res.innerHTML += `<p>[${lista}]</p>`
            // res.innerHTML += 'FIM]'
        } else if (isFibonacci(i) == false) {
            res.innerHTML = 'O número de Início não faz parte da sequência de Fibonacci.'
        } else if (isFibonacci(f) == false) {
            res.innerHTML = 'O número de Fim não faz parte da sequência de Fibonacci.'
        } else if (isFibonacci(i) == false && isFibonacci(f) == false) {
            res.innerHTML = 'Ambos os números não fazem parte da sequência de Fibonacci.'
        }
    }
}