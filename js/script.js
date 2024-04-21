"use strict";

document.getElementById("buttonKonversi").addEventListener("click", convertToCelsius);
document.getElementById("buttonKonversiReverse").addEventListener("click", convertToFahrenheit);
document.querySelector("button[type='reset']").addEventListener("click", resetForm);

function convertToCelsius() {
  const celsiusInput = document.querySelector("input[name='temperature']");
  const celsius = parseFloat(celsiusInput.value);

  if (isNaN(celsius)) {
    document.getElementById("error").classList.remove("hidden");
    return;
  }

  const fahrenheit = (celsius * 9) / 5 + 32;
  document.getElementById("result").textContent = `${celsius} Celsius is equal to ${fahrenheit.toFixed(2)} Fahrenheit`;
  document.getElementById("error").classList.add("hidden");
}

function convertToFahrenheit() {
  const celsiusInput = document.querySelector("input[name='temperature']");
  const fahrenheit = parseFloat(celsiusInput.value);

  if (isNaN(fahrenheit)) {
    document.getElementById("error").classList.remove("hidden");
    return;
  }

  const celsius = ((fahrenheit - 32) * 5) / 9;
  document.getElementById("result").textContent = `${fahrenheit} Fahrenheit is equal to ${celsius.toFixed(2)} Celsius`;
  document.getElementById("error").classList.add("hidden");
}

function resetForm() {
  document.querySelector("input[name='temperature']").value = "";
  document.getElementById("result").textContent = "";
  document.getElementById("error").classList.add("hidden");
}
