"use strict";

document.getElementById("buttonKonversi").addEventListener("click", konversiKeCelsius);
document.getElementById("buttonKonversiReverse").addEventListener("click", konversiKeFahrenheit);
document.querySelector("button[type='reset']").addEventListener("click", resetForm);

function konversiKeCelsius() {
  const inputCelsius = document.querySelector("input[name='temperature']");
  const celsius = parseFloat(inputCelsius.value);

  if (isNaN(celsius)) {
    document.getElementById("error").classList.remove("hidden");
    return;
  }

  const fahrenheit = (celsius * 9) / 5 + 32;
  document.getElementById("result").textContent = `${celsius} Celsius sama dengan ${fahrenheit.toFixed(2)} Fahrenheit`;
  document.getElementById("explanation").textContent = "Penjelasan: Untuk mengonversi Celsius ke Fahrenheit, Anda mengalikannya dengan 9/5 dan tambahkan 32.";
  document.getElementById("error").classList.add("hidden");
}

function konversiKeFahrenheit() {
  const inputFahrenheit = document.querySelector("input[name='temperature']");
  const fahrenheit = parseFloat(inputFahrenheit.value);

  if (isNaN(fahrenheit)) {
    document.getElementById("error").classList.remove("hidden");
    return;
  }

  const celsius = ((fahrenheit - 32) * 5) / 9;
  document.getElementById("result").textContent = `${fahrenheit} Fahrenheit sama dengan ${celsius.toFixed(2)} Celsius`;
  document.getElementById("explanation").textContent = "Penjelasan: Untuk mengonversi Fahrenheit ke Celsius, Anda kurangkan 32 kemudian kalikan dengan 5/9.";
  document.getElementById("error").classList.add("hidden");
}

function resetForm() {
  document.querySelector("input[name='temperature']").value = "";
  document.getElementById("result").textContent = "";
  document.getElementById("explanation").textContent = "";
  document.getElementById("error").classList.add("hidden");
}
