function convertTemperature() {
    const input = document.getElementById("inputTemp").value;
    const output = document.getElementById("result");
    const type = document.getElementById("type").value; // "CtoF" or "FtoC"

    let result = "";
    let tempValue = null;

    if (input === "" || isNaN(parseFloat(input))) {
        result = "Please enter a valid number.";
        output.style.color = "black";
    } else if (type === "CtoF") {
        tempValue = (parseFloat(input) * 9/5) + 32;
        result = tempValue.toFixed(2) + " °F";
    } else if (type === "FtoC") {
        tempValue = (parseFloat(input) - 32) * 5/9;
        result = tempValue.toFixed(2) + " °C";
    } else {
        result = "Invalid conversion type";
        output.style.color = "black";
    }

    // Change color based on temperature value
    if (tempValue !== null) {
        if (tempValue <= 0) {
            output.style.color = "blue";
        } else if (tempValue > 0 && tempValue < 60) {
            output.style.color = "blue";
        } else {
            output.style.color = "red";
        }
    }

    output.textContent = result;
}
