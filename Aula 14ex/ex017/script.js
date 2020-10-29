function gerar(){
    let num = Number(document.getElementById('txtn').value)
    let tab = document.getElementById('seltab')
    if (num == 0){
        window.alert('Por favor, digite um numero')
    }else{
        tab.innerHTML = ''
        for(c = 1; c <=10; c++ ){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}