$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }

const playButton = document.getElementById('playButton');
const audio = document.getElementById('audio');

playButton.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = '❚❚'; // Change button to pause icon
    } else {
        audio.pause();
        playButton.textContent = '▶'; // Change button back to play icon
    }
});
  
});
