let valores = [5,2,3,4,6,1,7,2]
valores.sort()
/*for (let pos = 0; pos < valores.length ; pos++ ){
    console.log(`Os numeros da variavel valores sao ${valores[pos]}`)
}*/
for(let pos in valores){
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}