//utilizando estrutura de repetição com array/vetores

/* let valores = [1,2,3,4,5,6]

console.log(valores [0]) 

let valores = [1,2,3,4,5,6,7,8,9,10]
console.log (valores)

for(let pos=0; pos < valores.length; pos++) {
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

//agora vamos simplificar utilizando for in

let valores = [1,2,3,4,5,6,7,8,9,10]
for (let pos in valores) {
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
}