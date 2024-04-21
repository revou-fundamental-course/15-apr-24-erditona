"use strict";

document.getElementById("button").addEventListener("click", toggleError);

function toggleError() {
  // Remove previous result and error message
  const resultElement = document.getElementById("result");
  resultElement.textContent = "";

  const errorMessage = document.getElementById("error");
  errorMessage.classList.add("hidden");

  // Convert Celsius to Fahrenheit
  const celsiusInput = document.querySelector("input[name='temperature']");
  const celsius = parseFloat(celsiusInput.value);

  // Check if input is a valid number
  if (isNaN(celsius)) {
    // Show error message
    errorMessage.classList.remove("hidden");

    // Highlight input and label with red
    const allBorders = document.querySelectorAll(".border-gray-200");
    const allTexts = document.querySelectorAll(".text-gray-500");
    allBorders.forEach((el) => {
      el.classList.add("border-red-600");
    });
    allTexts.forEach((el) => {
      el.classList.add("text-red-600");
    });

    return; // Exit function if there's an error
  }

  // Calculate Fahrenheit
  const fahrenheit = (celsius * 9) / 5 + 32;

  // Display result
  resultElement.textContent = `${celsius} Celsius sama dengan ${fahrenheit.toFixed(2)} Fahrenheit`;
}
