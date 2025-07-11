function convertTemperature() {
    const input = document.getElementById("inputTemp").value;
    const output = document.getElementById("result");
    const type = document.getElementById("type").value; // "CtoF" or "FtoC"

    let result = "";
    let tempValue = null;
    let inputValue = parseFloat(input);

    if (input === "" || isNaN(inputValue)) {
        result = "Please enter a valid number.";
        output.style.color = "black";
    } else if (type === "CtoF") {
        tempValue = (inputValue * 9/5) + 32;
        result = tempValue.toFixed(2) + " °F";
    } else if (type === "FtoC") {
        tempValue = (inputValue - 32) * 5/9;
        result = tempValue.toFixed(2) + " °C";
    } else {
        result = "Invalid conversion type";
        output.style.color = "black";
    }

    // Change color based on temperature value
    if (tempValue !== null) {
        if (tempValue <= 0) {
            output.style.color = "white";
            document.body.style.backgroundColor = "lightblue";// blue for low temperatures
        } else if (tempValue > 0 && tempValue < 60) {
            output.style.color = "black";
            document.body.style.backgroundColor = "lightyellow"; // yellow for moderate temperatures
        } else {
            output.style.color = "white";
            document.body.style.backgroundColor = "lightred"; // red for high temperatures
        }
    } else {
        document.body.style.backgroundColor = "white"; // default background
    }
    output.textContent = result;
}

function resetConverter() {
    document.getElementById("inputTemp").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("result").style.backgroundColor = "white";
    document.getElementById("result").style.color = "black";
    document.body.style.backgroundColor = "white";
}
