
$(function () {

  $('#saveAlert').hide();
  
  var hour9 = $('#hour-9');
  var hour10 = $('#hour-10');
  var hour11 = $('#hour-11');
  var hour12 = $('#hour-12');
  var hour13 = $('#hour-13');
  var hour14 = $('#hour-14');
  var hour15 = $('#hour-15');
  var hour16 = $('#hour-16');
  var hour17 = $('#hour-17');
  var button = $('.btn')

  //Show alert when save button is clicked
  button.on('click',function() {
    $('#saveAlert').show();
    setTimeout(function() {
      $('#saveAlert').hide();
    }, 2000);
  })

  //Store event when the save button is clicked
  hour9.children().eq(2).on('click', function () {
    var hour9Item = hour9.children().eq(1).val()
    localStorage.setItem("hour9", hour9Item);
  });
  
  hour10.children().eq(2).on('click', function () {
    var hour10Item = hour10.children().eq(1).val()
    localStorage.setItem("hour10", hour10Item);
  });
  
  hour11.children().eq(2).on('click', function () {
    var hour11Item = hour11.children().eq(1).val()
    localStorage.setItem("hour11", hour11Item);
  });

  hour12.children().eq(2).on('click', function () {
    var hour12Item = hour12.children().eq(1).val()
    localStorage.setItem("hour12", hour12Item);
  });

  hour13.children().eq(2).on('click', function () {
    var hour13Item = hour13.children().eq(1).val()
    localStorage.setItem("hour13", hour13Item);
  });

  hour13.children().eq(2).on('click', function () {
    var hour13Item = hour13.children().eq(1).val()
    localStorage.setItem("hour13", hour13Item);
  });

  hour13.children().eq(2).on('click', function () {
    var hour13Item = hour13.children().eq(1).val()
    localStorage.setItem("hour13", hour13Item);
  });

  hour14.children().eq(2).on('click', function () {
    var hour14Item = hour14.children().eq(1).val()
    localStorage.setItem("hour14", hour14Item);
  });

  hour15.children().eq(2).on('click', function () {
    var hour15Item = hour15.children().eq(1).val()
    localStorage.setItem("hour15", hour15Item);
  });

  hour16.children().eq(2).on('click', function () {
    var hour16Item = hour16.children().eq(1).val()
    localStorage.setItem("hour16", hour16Item);
  });

  hour17.children().eq(2).on('click', function () {
    var hour17Item = hour17.children().eq(1).val()
    localStorage.setItem("hour17", hour17Item);
  });
 
  //Check the time and display the color for past, present, or future
  if(dayjs().format('HH') == 9){
    hour9.addClass('present');
  } else if(dayjs().format('HH') < 9) {
    hour10.addClass('future');
  } else if(dayjs().format('HH') > 9) {
    hour9.addClass('past');
  }

  if(dayjs().format('HH') == 10){
    hour10.addClass('present');
  } else if(dayjs().format('HH') < 10) {
    hour10.addClass('future');
  } else if(dayjs().format('HH') > 10) {
    hour10.addClass('past');
  }

  if(dayjs().format('HH') == 11){
    hour11.addClass('present');
  } else if(dayjs().format('HH') < 11) {
    hour11.addClass('future');
  } else if(dayjs().format('HH') > 11) {
    hour11.addClass('past');
  }

  if(dayjs().format('HH') == 12){
    hour12.addClass('present');
  } else if(dayjs().format('HH') < 12) {
    hour12.addClass('future');
  } else if(dayjs().format('HH') > 12) {
    hour12.addClass('past');
  }

  if(dayjs().format('HH') == 13){
    hour13.addClass('present');
  } else if(dayjs().format('HH') < 13) {
    hour13.addClass('future');
  } else if(dayjs().format('HH') > 13) {
    hour13.addClass('past');
  }

  if(dayjs().format('HH') == 14){
    hour14.addClass('present');
  } else if(dayjs().format('HH') < 14) {
    hour14.addClass('future');
  } else if(dayjs().format('HH') > 14) {
    hour14.addClass('past');
  }

  if(dayjs().format('HH') == 15){
    hour15.addClass('present');
  } else if(dayjs().format('HH') < 15) {
    hour15.addClass('future');
  } else if(dayjs().format('HH') > 15) {
    hour15.addClass('past');
  }

  if(dayjs().format('HH') == 16){
    hour16.addClass('present');
  } else if(dayjs().format('HH') < 16) {
    hour16.addClass('future');
  } else if(dayjs().format('HH') > 16) {
    hour16.addClass('past');
  }

  if(dayjs().format('HH') == 17){
    hour17.addClass('present');
  } else if(dayjs().format('HH') < 17) {
    hour17.addClass('future');
  } else if(dayjs().format('HH') > 17) {
    hour17.addClass('past');
  }

  //Retrieve the stored events and display them when the page is reloaded
  function displayStoredItems() {
    var hour9Displayed = localStorage.getItem("hour9");
    var hour10Displayed = localStorage.getItem("hour10");
    var hour11Displayed = localStorage.getItem("hour11");
    var hour12Displayed = localStorage.getItem("hour12");
    var hour13Displayed = localStorage.getItem("hour13");
    var hour14Displayed = localStorage.getItem("hour14");
    var hour15Displayed = localStorage.getItem("hour15");
    var hour16Displayed = localStorage.getItem("hour16");
    var hour17Displayed = localStorage.getItem("hour17");
    var hour9El = hour9.children().eq(1);
    var hour10El = hour10.children().eq(1);
    var hour11El = hour11.children().eq(1);
    var hour12El = hour12.children().eq(1);
    var hour13El = hour13.children().eq(1);
    var hour14El = hour14.children().eq(1);
    var hour15El = hour15.children().eq(1);
    var hour16El = hour16.children().eq(1);
    var hour17El = hour17.children().eq(1);
    hour9El.text(hour9Displayed);
    hour10El.text(hour10Displayed);
    hour11El.text(hour11Displayed);
    hour12El.text(hour12Displayed);
    hour13El.text(hour13Displayed);
    hour14El.text(hour14Displayed);
    hour15El.text(hour15Displayed);
    hour16El.text(hour16Displayed);
    hour17El.text(hour17Displayed);
  }


  displayStoredItems()

  //Display current time
  var today = dayjs()
  $('#currentDay').text(today.format('dddd, MMMM D, YYYY'))
});

