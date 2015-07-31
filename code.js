var clickedTime;
var createdTime;
var reactionTime;
var colors = ["red","lightblue","lightgreen","yellow","purple","orange"];
var bestTime = 100;

function makeBox() {
  var time = Math.random() * 2000;
  var top = Math.random() * 200;
  var left = Math.random() * 800;

  setTimeout(function(){
    document.getElementById('box').style.display = "block";
    document.getElementById('box').style.marginTop = top + "px";
    document.getElementById('box').style.marginLeft = left + "px";
    document.getElementById('box').style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
    createdTime = Date.now();
  }, time);
};

document.getElementById("box").onclick = function() {
  clickedTime = Date.now();
  reactionTime = (clickedTime - createdTime) / 1000;

  if (reactionTime <= bestTime) {
    bestTime = reactionTime;
  };

  if (bestTime != 100) {
    document.getElementById('best-time').innerHTML = " --- Your best time: " + bestTime + "s";
  };

  document.getElementById('time').innerHTML = reactionTime;
  this.style.display = "none";
  makeBox();
};

document.getElementById('start').onclick = function() {
  makeBox();
  $(this).hide();
  $('#stop').fadeIn();
};

document.getElementById('stop').onclick = function() {
  $(this).hide();
  $('#start').fadeIn();
  $('#box').hide();
};
