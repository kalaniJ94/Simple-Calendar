// 2) Each block is savable independent of the other blocks
      // Select the immediate parent container of ALL of the buttons
  var container = document.querySelector('.container-lg');
  // Event listener on the PARENT container of all the buttons
  container.addEventListener('click', (event) => {
    // conditional that checks if the element that was clicked is a button
    if (event.target.className.includes('btn')) {
      // If a button element was clicked, print the value of the textbox next to THAT button.
      console.log(event.target.previousElementSibling.value)
    }
  })

  // localStorageSetItem missing