// Select the input elements by their class names
const celInput = document.querySelector(".Celsius");
const farInput = document.querySelector(".Fahrenheit");
const Kinput=document.querySelector(".K")

// Function to convert from Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Function to convert from Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}


// Event listener for Celsius input
celInput.addEventListener("input", () => {
  const celValue = parseFloat(celInput.value); // Parse the input as a float
  if (!isNaN(celValue)) { // Check if it's a valid number
    const farValue = celsiusToFahrenheit(celValue);
    farInput.value = farValue.toFixed(2);
  } else {
    farInput.value = ""; // Clear Fahrenheit input if Celsius input is not a number
  }
});

// Event listener for Fahrenheit input
farInput.addEventListener("input", () => {
  const farValue = parseFloat(farInput.value); // Parse the input as a float
  if (!isNaN(farValue)) { // Check if it's a valid number
    const celValue = fahrenheitToCelsius(farValue);
    celInput.value = celValue.toFixed(2);
  } else {
    celInput.value = ""; // Clear Celsius input if Fahrenheit input is not a number
  }
});
