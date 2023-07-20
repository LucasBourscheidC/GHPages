export function initButtons(newCharacter, reset, result, del) 
{
  const themesButton = document.querySelector('.themes-button');
  const buttonsNumber = document.querySelectorAll('.button-number');    
  const buttonsArithmetic = document.querySelectorAll('.button-arithmetic');
  const buttonResult = document.querySelector('#result');
  const buttonReset = document.querySelector('#reset');
  const buttonDel = document.querySelector('#del');
  
  buttonReset.addEventListener('click', reset);
  buttonDel.addEventListener('click', del);
  buttonResult.addEventListener('click', result);
  themesButton.addEventListener("click", () => {
    if(parseInt(getComputedStyle(themesButton).gridColumn) === 1)
      themesButton.style.gridColumn = "2";
    else if(parseInt(getComputedStyle(themesButton).gridColumn) === 2)
      themesButton.style.gridColumn = "3";
    else
      themesButton.style.gridColumn = "1";
  })
  
  buttonsNumber.forEach(currentButton => {
    currentButton.addEventListener("click", () => {
        newCharacter(currentButton.id);
    })
  })
  
  buttonsArithmetic.forEach(currentArithmetic => {
    currentArithmetic.addEventListener('click', () => {
      if (currentArithmetic.id === "sum")
        newCharacter("+");
      else if (currentArithmetic.id === "subtraction")
        newCharacter("-");
      else if (currentArithmetic.id === "division")
        newCharacter("/");
      else
        newCharacter("x");
    })
  })
}
  