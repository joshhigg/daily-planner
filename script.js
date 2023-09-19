// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
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

  var hour9 = $('#hour-9');
  if(dayjs().format('HH') == 9){
    hour9.addClass('present');
  } else if(dayjs().format('HH') > 9) {
    hour9.addClass('past');
  }

  var hour10 = $('#hour-10');
  if(dayjs().format('HH') == 10){
    hour10.addClass('present');
  } else if(dayjs().format('HH') < 10) {
    hour10.addClass('future');
  } else if(dayjs().format('HH') > 10) {
    hour10.addClass('past');
  }

  var hour11 = $('#hour-11');
  if(dayjs().format('HH') == 11){
    hour11.addClass('present');
  } else if(dayjs().format('HH') < 11) {
    hour11.addClass('future');
  } else if(dayjs().format('HH') > 11) {
    hour11.addClass('past');
  }

  var hour12 = $('#hour-12');
  if(dayjs().format('HH') == 12){
    hour12.addClass('present');
  } else if(dayjs().format('HH') < 12) {
    hour12.addClass('future');
  } else if(dayjs().format('HH') > 12) {
    hour12.addClass('past');
  }

  var hour13 = $('#hour-13');
  if(dayjs().format('HH') == 13){
    hour13.addClass('present');
  } else if(dayjs().format('HH') < 13) {
    hour13.addClass('future');
  } else if(dayjs().format('HH') > 13) {
    hour13.addClass('past');
  }

  var hour14 = $('#hour-14');
  if(dayjs().format('HH') == 14){
    hour14.addClass('present');
  } else if(dayjs().format('HH') < 14) {
    hour14.addClass('future');
  } else if(dayjs().format('HH') > 14) {
    hour14.addClass('past');
  }

  var hour15 = $('#hour-15');
  if(dayjs().format('HH') == 15){
    hour15.addClass('present');
  } else if(dayjs().format('HH') < 15) {
    hour15.addClass('future');
  } else if(dayjs().format('HH') > 15) {
    hour15.addClass('past');
  }

  var hour16 = $('#hour-16');
  if(dayjs().format('HH') == 16){
    hour16.addClass('present');
  } else if(dayjs().format('HH') < 16) {
    hour16.addClass('future');
  } else if(dayjs().format('HH') > 16) {
    hour16.addClass('past');
  }

  var hour17 = $('#hour-17');
  if(dayjs().format('HH') == 17){
    hour17.addClass('present');
  } else if(dayjs().format('HH') < 17) {
    hour17.addClass('future');
  } else if(dayjs().format('HH') > 17) {
    hour17.addClass('past');
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // console.log(hour9.children[1])


  var today = dayjs()
  $('#currentDay').text(today.format('dddd, MMMM D, YYYY'))
});
