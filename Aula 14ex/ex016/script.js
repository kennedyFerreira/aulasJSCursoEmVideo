function contar(){
    let ini = Number(document.getElementById('txti').value)
    let fim = Number(document.getElementById('txtf').value)
    let pas = Number(document.getElementById('txtp').value)
    let res = document.querySelector('div#res')
    if(ini == 0 || fim == 0  ){
        res.innerHTML = 'Impossivel contar.'
    }else{
        res.innerHTML = `Contando: `
        if(pas <=0){
            window.alert('Passo invalido! Considerando passo 1.')
            pas = 1
        }
        if(ini < fim){
            for( ini ; ini <= fim ; ini += pas){
                res.innerHTML += `${ini}  \u{1F632}`
            }      
        }else{
            for( ini ; ini>= fim; ini -= pas){
                res.innerHTML += `${ini}  \u{1F632}`
            }
            
        }
        res.innerHTML += `\u{1F3C1}`
        
    }
}
    
