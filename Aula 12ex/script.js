function verificar(){
    var nota1 = Number(document.getElementById('nota1').value)
    var nota2 = Number(document.getElementById('nota2').value)
    var nota3 = Number(document.getElementById('nota3').value)
    var nota4 = Number(document.getElementById('nota4').value)
    var media = ((nota1 + nota2 + nota3 + nota4)/4).toFixed(1)
    var notas = document.querySelector('div#notas')
    var res = document.querySelector('div#res')
    notas.innerHTML = `<p>Primeira nota:${nota1}</p>
                    <p>Segunda nota:${nota2}</p>
                    <p>Terceira nota:${nota3}</p>
                    <p>Quarta nota:${nota4}</p>`
    if(media < 4){
        res.innerHTML = `Sua media foi ${media}, voce foi reprovado.`
    }else if(media < 7){
        res.innerHTML = `Sua media foi ${media}, voce devera fazer recuperaçao.`
    }else{
        res.innerHTML = `Sua media foi ${media}, voce esta aprovado.`
    }
    
}