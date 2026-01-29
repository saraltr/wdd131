// values
const temperature = Number(document.querySelector("#temp").textContent);
const windSpeed = Number(document.querySelector("#windSpeed").textContent);

console.log(temperature);

// output element
const windChillElement = document.querySelector("#windchill");

// wind chill calculation
function calculateWindChill(t, v) {
  return 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16));
}

// check conditions before calculating
if (temperature <= 10 && windSpeed > 4.8) {
  const windChill = calculateWindChill(temperature, windSpeed);
  windChillElement.textContent = `${windChill.toFixed(1)} °C`;
} else {
  windChillElement.textContent = "N/A";
}