//variaveis
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const form = document.querySelector("form");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// Cotação das moedas
const USD = 4.87;
const EUR = 5.32;
const GBP = 6.50;

// Função para receber o valor digitado
amount.addEventListener("input", (event) => {
    // Criando uma expressão regular para permitir somente números
    const onlyNumbersRegex = /\D+/g;
    amount.value = amount.value.replace(onlyNumbersRegex, "");
});

// Obtendo a moeda selecionada
form.onsubmit = (event) => {
    event.preventDefault(); // Corrigido de preventDefalt para preventDefault

    // Switch case para selecionar a moeda escolhida
    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "$");
            break;
        case "EUR":
            convertCurrency(amount.value, EUR, "€");
            break;
        case "GBP":
            convertCurrency(amount.value, GBP, "£");
            break;
    }
};

// Função para converter a moeda
function convertCurrency(amount, price, simbol) {

    try {
        //exibe a cotação da moeda selecionada  
        description.textContent = `${simbol} 1 = ${formatCurrencyBRL(price)}`

        //aplica a classe que exbibe o total convertido
        footer.classList.add("show-result");

        //realizando o calculo e convertendo o valor total
        let total = amount * price;

        //condição para verificar se o numero digitado não é um numero
        if(isNaN(total)){
            return alert("Por favor! Digite o valor corretamente para converter")
        }

        //formatando o valor total
        total = formatCurrencyBRL(total).replace("R$", "");
        result.textContent = `${total} Reais`;
        
    } catch (error) {
        //removendo o resultado caso haja erro 
        footer.classList.add("show-result");

        //exibindo mensagem de erro 
        console.log(error);
        alert("Erro, tente novamente mais tarde!");
    }
}

//função para formatar a moeda em real brasileiro
function formatCurrencyBRL(value){

    //convert para numero para utilizar o tolocale string para formatar no padrão BRL
    return Number(value).toLocaleString("pt-BR",{
        style: "currency",
        currency: "BRL",

    })

}


