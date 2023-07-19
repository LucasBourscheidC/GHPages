export function initButtons() 
{
    const themesButton = document.querySelector('.themes-button');
    const buttonsNumber = document.querySelectorAll('.button-number');
    const buttonsArithmetic = document.querySelectorAll('.button-arithmetic');
  
    themesButton.addEventListener("click", () => {
        if(parseInt(getComputedStyle(themesButton).gridColumn) === 1)
            themesButton.style.gridColumn = "2";
        else if(parseInt(getComputedStyle(themesButton).gridColumn) === 2)
            themesButton.style.gridColumn = "3";
        else
            themesButton.style.gridColumn = "1";
    });
  
    buttonsNumber.forEach(currentButton => {
      currentButton.addEventListener("click", () => {
        newValor(currentButton.id);
      });
    });
  
    buttonsArithmetic.forEach(currentArithmetic => {
      currentArithmetic.addEventListener('click', () => {
        if (currentArithmetic.id === "sum")
          newValor("+");
        else if (currentArithmetic.id === "subtraction")
          newValor("-");
        else if (currentArithmetic.id === "division")
          newValor("/");
        else
          newValor("x");
      });
    });
}
  