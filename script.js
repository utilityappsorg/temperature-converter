function conveter() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    
    // Convert the input to uppercase
    const convertedText = input.toUpperCase();
    
    // Display the converted text in the output area
    output.value = convertedText;
}