let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if (Number(n) >=1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adicionar(){
    
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Numero ${num.value} foi adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        window.alert('Digite um numero valido')
    }
    num.value = ''
    num.focus() //para ter foco em algum objeto
}
function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione algum numero.')
    }
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma =  0
    let media = 0 
    for(let pos in valores){
        soma += valores[pos]
        media 
        if (valores[pos] > maior)
            maior = valores[pos]
        if (valores[pos] < menor)
            menor = valores[pos] 
    }
    media = soma/tot
    res.innerHTML = ''
    res.innerHTML = `<p>Voce adicionou ${tot} numeros</p>`
    res.innerHTML += `<p>O maior numero e ${maior}.</p>`
    res.innerHTML += `<p>O menor numero e ${menor}</p>`
    res.innerHTML += `<p>A soma total dos numeros e ${soma}</p>`
    res.innerHTML += `<p>A media dos numeros e ${media}</p>`
}


    
   