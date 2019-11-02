var interval;
var seconds = 75;
var minutesFormat;
var score = 0;
var i = 0;
var optionClick;

var questions = [{
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "alerts"],
    answer: "curly brackets"
  },
  {
      title: "Which of the following is a valid type of function javascript supports?",
      choices: ["named function", "anonymous function", "Both of the above", "None of the above"],
      answer: "Both of the above"
  },
  {
      title: "Which of the following type of variable is visible only within a function where it is defined?",
      choices: ["global variable", "local variable", "Both of the above", "None of the above"],
      answer: "local variable"
  },
  {
      title: "Which built-in method returns the characters in a string beginning at the specified location?",
      choices: ["substr()", "getSubstring()", "slice()", "None of the above"],
      answer: "substr()"
  },
  {
      title: "Which of the following function of String object is used to match a regular expression against a string?",
      choices: ["concat()", "match()", "search()", "replace()"],
      answer: "match()"
  }
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
      $('.landingRow').hide();
      $('.quizRow').show();
      startTimer();
    });
  }

  function quizQuestions() {

    optionClick = '#option' + questions[i].answer;

    $('#questionTitle').text(questions[i].title);
    $('.option1').text(questions[i].choices[0]);
    $('.option2').text(questions[i].choices[1]);
    $('.option3').text(questions[i].choices[2]);
    $('.option4').text(questions[i].choices[3]);
    }

    $('.option').click(function(event) {
      event.preventDefault();

      if (i<5) {
        if (event.currentTarget.textContent === questions[i].answer) {
          alert('CORRECT ANSWER!');
          i++;
          score++;
          quizQuestions();
        } else {
          alert('WRONG ANSWER');
          i++;
          quizQuestions();
          seconds = seconds-10;
        }
      } else {
        if (event.currentTarget.textContent === questions[i].answer) {
          alert('CORRECT ANSWER!');
          score++;
          clearInterval(interval);
          $('.quizRow').hide();
          showScore();
          $('.enterNameCont').show();
        } else {
          alert('WRONG ANSWER');
          seconds = seconds-10;
          clearInterval(interval);
          $('.quizRow').hide();
          showScore();
          $('.enterNameCont').show();
        }
      }
  });

  function startTimer() {
    interval = setInterval(function() {
      seconds--;
      $('#timer').html("TIMER: " + formatMinutes() + ":" + formatSeconds());

      if (seconds === 0) {
        clearInterval(interval);
        $('#timer').text('TIMES UP!!!');
        alert('QUIZ OVER!');
        $('.quizRow').hide();
        timesUp();
        $('.enterNameCont').show();
        return;
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
  }

  function showScore() {
    $('#score').text('You received a score of: ' + Math.round(((score/6)*100)) + '%!');
    $('#timeLeft').text('You finished this quiz in ' + (65 - seconds) + ' seconds!');
  }

  function timesUp() {
    $('#score').text('You ran out of time! You received a score of: ' + Math.round(((score/6)*100)) + '%!');
  }

  //RUN QUIZ
  $('.quizRow').hide();

  quizStart();
  quizQuestions();
  $('.enterNameCont').hide();
});
