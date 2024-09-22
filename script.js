let display = document.getElementById("display")
let buttons = Array.from(document.getElementsByClassName("btn"));

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    let value = button.innerText;

    if (value === "=") {
      try {
        currentInput = eval(currentInput);
      } catch {
        currentInput = "Error";
      }
    } else if (value === "C") {
      currentInput = "";
    } else if (value === "CE") {
      currentInput = "";
    } else if (value === "Del") {
      currentInput = currentInput.slice(0, -1);
    } else {
      currentInput += value;
    }

    display.innerText = currentInput || "0";
  });
});