//variavel para receber o dado digitado do input
const amount = document.getElementById("amount")

//função para receber o valor digitado
amount.addEventListener("input", (event)=>{
    console.log(amount.value)
    
    //criando uma expressão regular para receber somente numeros
    const onlyNumbersRegex = /\D+/g
    amount.value = amount.value.replace(onlyNumbersRegex, "")

})