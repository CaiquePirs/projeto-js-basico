//variaveis
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const form = document.querySelector("form");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");

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
        description.textContent = `${simbol} 1 = ${price}`
        footer.classList.add("show-result");
        
    } catch (error) {
        //removendo o resultado caso haja erro 
        footer.classList.add("show-result");

        //exibindo mensagem de erro 
        console.log(error);
        alert("Erro, tente novamente mais tarde!");
    }

}


