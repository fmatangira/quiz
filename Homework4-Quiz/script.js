$(document).ready(function() {
  var interval;
  var seconds = 100;
  var minutesFormat;

//FUNCTION TO FORMAT MINUTES IN TIMER
function formatMinutes() {

  minutesFormat = Math.floor(seconds / 60);

  var formattedMinutes;

  if (minutesFormat < 10) {
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

  if (secondsFormat < 10) {
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
      $('#timeInterval').html(formatMinutes() + ":" + formatSeconds());
    },1000);
  });
}

startTimer();
});
