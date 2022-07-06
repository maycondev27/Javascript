function parimp (n) { //parimp é o parâmetro (n)
    if (n%2==0) { //toda a parte do if foi a minha ação
      return "par" }
      else {
        return "ímpar"  //tivemos dois retornos, nesse caso foi o ímpar pois a var é 11 e não é % de 2 == 0
      }
}
let res = parimp(11) //-> chamada
console.log (`A resposta é ${res}`)

//acima eu criei uma função que a var é 11 e fez o retorno do resultado que todo nr da var que não for % de 2 = 0 vai da ímpar
