$(document).ready(function() {
  var interval;
  var seconds = 10;
  var minutesFormat;

//FUNCTION TO FORMAT MINUTES IN TIMER
function formatMinutes() {

  var formattedMinutes;
  minutesFormat = Math.floor(seconds / 60);

  if (seconds < 10) {
    formattedMinutes = "0" + minutesFormat;
  } else {
    formattedMinutes = minutesFormat;
  }
  return formattedMinutes;
}

// FUNCTION TO FORMAT SECONDS IN TIMER
function formatSeconds () {

  var secondsFormat = seconds % 60;
  var formattedSeconds;

  if (seconds < 10) {
    formattedSeconds = "0" + secondsFormat;
  } else {
    formattedSeconds = secondsFormat;
  }
  return formattedSeconds;
}

//START TIMER WHEN CLICKING ON "START QUIZ" BUTTON
function startTimer() {
  $('#quizButton').on('click', function() {
    interval = setInterval(function() {
      seconds--;
      $('#timer').html("TIMER: " + formatMinutes() + ":" + formatSeconds());

      if (seconds === 0) {
        clearInterval(interval);
        $('#timer').text('TIMES UP!!!');
      }
    },1000);
  });
}

startTimer();
});
