function convertTemperature() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    const type = document.getElementById("type").value; // e.g., "CtoF" or "FtoC"

    let result = "";
    if (type === "CtoF") {
        result = (parseFloat(input) * 9/5) + 32;
    } else if (type === "FtoC") {
        result = (parseFloat(input) - 32) * 5/9;
    } else {
        result = "Invalid conversion type";
    }
    output.value = result;
}