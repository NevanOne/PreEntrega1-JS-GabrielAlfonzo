
  // Crear una función para la conversión de monedas
  function convert() {
    // Obtener el monto, la moneda de origen y la moneda de destino del formulario
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    
    // Crea un objeto con las tasas de cambio fijas entre las monedas
    const exchangeRates = {
      USD: 1,
      EUR: 1.2,
      GBP: 1.3
    };
    
    // Obtener la tasa de cambio entre la moneda de origen y la moneda de destino
    const exchangeRate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    
    // Aplicar la tasa de cambio al monto dado
    const convertedAmount = amount * exchangeRate;
    
    // Mostrar el monto convertido en el elemento "result"
    document.getElementById("result").innerHTML = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  }
