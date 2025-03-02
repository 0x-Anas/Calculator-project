const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;

    if (value === "AC") {
      // Clear the display
      display.value = "";
    } else if (value === "DL") {
      // Delete the last character
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      // Evaluate the expression
      try {
        display.value = eval(display.value.replace("x", "*"));
      } catch {
        display.value = "Error"; // Handle invalid expressions
      }
    } else {
      // Append the button value to the display
      display.value += value;
    }
  });
});




