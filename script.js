// Crear la funcion para convertir el tipo de moneda
 function convert() {
  const amount = document.getElementById("amount").value;
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  
  //Valores de los tipos de cambio
  const exchangeRates = {
    USD: 1,
    EUR: 1.2,
    GBP: 1.3
  };
  
  // Formula de conversión aplicada
  const exchangeRate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
  const convertedAmount = amount * exchangeRate;
  
  // En caso de que el monto escrito sea negativo, mostrará una alerta para que el usuario corrija su error, se usa un pequeño ciclo para ello.

  if (amount > 0) {
      document.getElementById("result").innerHTML = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  } else {
      document.getElementById("result").innerHTML = "Ingrese un monto positivo";
  }
}