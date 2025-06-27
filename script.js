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

    // Color logic based on input value and scale
    if (!isNaN(inputValue)) {
        if ((type === "CtoF" && inputValue <= 0) || (type === "FtoC" && inputValue <= 32)) {
            output.style.color = "blue";
            document.body.style.backgroundColor = "#e0f7fa"; // light blue
        } else if ((type === "CtoF" && inputValue > 0 && inputValue < 30) || (type === "FtoC" && inputValue > 32 && inputValue < 86)) {
            output.style.color = "#b59f00";
            document.body.style.backgroundColor = "#ffffcc"; // light yellow
        } else if ((type === "CtoF" && inputValue >= 30) || (type === "FtoC" && inputValue >= 86)) {
            output.style.color = "red";
            document.body.style.backgroundColor = "#ffcccc"; // light red
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
