function convertTemperature() {
    const input = document.getElementById("inputTemp").value;
    const output = document.getElementById("result");
    const type = document.getElementById("type").value; // "CtoF" or "FtoC"

    let result = "";
    if (input === "" || isNaN(parseFloat(input))) {
        result = "Please enter a valid number.";
    } else if (type === "CtoF") {
        result = ((parseFloat(input) * 9/5) + 32).toFixed(2) + " °F";
    } else if (type === "FtoC") {
        result = ((parseFloat(input) - 32) * 5/9).toFixed(2) + " °C";
    } else {
        result = "Invalid conversion type";
    }
    output.textContent = result;
}