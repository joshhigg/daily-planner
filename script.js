
$(function () {

  $('#saveAlert').hide();


  //Show alert when save button is clicked
  //Store event when the save button is clicked
  $('.btn').on('click', function () {
    $('#saveAlert').show();
    setTimeout(function () {
      $('#saveAlert').hide();
    }, 2000);

    var time = $(this).parent().attr('id');
    var text = $(this).siblings('.description').val();
    localStorage.setItem(time, text)
  })


  //Check the time and display the color for past, present, or future
  function changeColor() {
    var currentTime = dayjs().hour()

    $('.time-block').each(function (i) {
      var blockTime = parseInt($(this).attr('id').split('-')[1])
      if (currentTime > blockTime) {
        $(this).addClass('past')
      } else if (currentTime === blockTime) {
        $(this).removeClass('past')
        $(this).addClass('present')
      } else {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
      }
    })

  }

  changeColor()



  //Retrieve the stored events and display them when the page is reloaded
  $('#hour-9 .description').text(localStorage.getItem("hour-9"))
  $('#hour-10 .description').text(localStorage.getItem("hour-10"))
  $('#hour-11 .description').text(localStorage.getItem("hour-11"))
  $('#hour-12 .description').text(localStorage.getItem("hour-12"))
  $('#hour-13 .description').text(localStorage.getItem("hour-13"))
  $('#hour-14 .description').text(localStorage.getItem("hour-14"))
  $('#hour-15 .description').text(localStorage.getItem("hour-15"))
  $('#hour-16 .description').text(localStorage.getItem("hour-16"))
  $('#hour-17 .description').text(localStorage.getItem("hour-17"))


  //Display current time
  var today = dayjs()
  $('#currentDay').text(today.format('dddd, MMMM D, YYYY'))
});

