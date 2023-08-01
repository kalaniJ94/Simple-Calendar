// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
function updateTime(){
  var currentDayEL = document.getElementById("currentDay");
  var today = dayjs();
  var formattedDateTime = today.format("ddd, MMMM D HH:mm:ss");
  
  currentDayEL.textContent = "Today is: " + formattedDateTime;
}
setInterval(updateTime, 1000);

$(function () {
function saveText(hourId) {
  var inputText = document.querySelector("inputText"); // Get the text from the corresponding textarea

  localStorage.setItem(hourId, inputText); // Save the text in localStorage with the hourId as the key
}

function loadSavedText(){
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    var hourId = i.value
    
  }
}
 document.addEventListener("DOMContentLoaded", function(){
  loadSavedText();
 })

 var saveButtons = document.querySelectorAll(".saveBtn");
 saveButtons.forEach(function (button) {
     button.addEventListener("click", function () {
         var hourId = this.parentNode.id; // Get the parent div's id, which corresponds to the hour (e.g., "9AM")
         saveText(hourId);
        });
      });
  


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
})

updateTime();