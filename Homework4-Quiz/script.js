var interval;
var seconds = 65;
var minutesFormat;

var questions = [{
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  ///etc.
];

$(document).ready(function() {


  //FUNCTION TO FORMAT MINUTES IN TIMER
  function formatMinutes() {

    var formattedMinutes;
    minutesFormat = Math.floor(seconds / 60);

    if (minutesFormat < 10) {
      formattedMinutes = "0" + minutesFormat;
    } else {
      formattedMinutes = minutesFormat;
    }
    return formattedMinutes;
  }

  // FUNCTION TO FORMAT SECONDS IN TIMER
  function formatSeconds() {

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
  function quizStart() {
    $('#quizButton').on('click', function() {
      $('.quizRow').show();
      $('.landingRow').hide();
      $('#questionTitle').text(questions[1].title);

        interval = setInterval(function() {
        seconds--;
        $('#timer').html("TIMER: " + formatMinutes() + ":" + formatSeconds());

        if (seconds === 0) {
          clearInterval(interval);
          $('#timer').text('TIMES UP!!!');
        }

        //FORMAT COLOR OF TIMER DEPENDING ON TIME LEFT
        $('#timer').css('color', 'green');

        if (seconds < 60) {
          $('#timer').css('color', '#e5d429');
        }

        if (seconds < 30) {
          $('#timer').css('color', 'orange');
        }

        if (seconds < 10) {
          $('#timer').css('color', 'red');
        }
      }, 1000);
    });
  }

  // function quiz() {
  //   $('quizButton').on('click', function() {
  //
  //   });
  //
  // }

  $('.quizRow').hide();
  // $('landingRow').hide();
  quizStart();
  // quiz();

});
