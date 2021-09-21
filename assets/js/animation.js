const images = document.querySelectorAll(".anim");

observer = new IntersectionObserver((entries) => {
  for (var i = 0; i < entries.length; i++) {
    if (entries[i].isIntersecting) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
        } else {
          entry.target.style.animation = "none";
        }
      });
    }
  }
});

images.forEach((image) => {
  observer.observe(image);
});

//second
const imagess = document.querySelectorAll(".anim2");

observer = new IntersectionObserver((entries) => {
  for (var i = 0; i < entries.length; i++) {
    if (entries[i].isIntersecting) {
      //add code of intersecting
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.style.animation = `anim3 2s ${entry.target.dataset.delay} forwards ease-out`;
        } else {
          entry.target.style.animation = "none";
        }
      });
    }
  }
});

imagess.forEach((image) => {
  observer.observe(image);
});

//slider
var words = document.getElementsByClassName("word");
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw =
    currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }

  for (var i = 0; i < nw.length; i++) {
    nw[i].className = "letter behind";
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }

  currentWord = currentWord == wordArray.length - 1 ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
  setTimeout(function () {
    cw[i].className = "letter out";
  }, i * 80);
}

function animateLetterIn(nw, i) {
  setTimeout(function () {
    nw[i].className = "letter in";
  }, 340 + i * 80);
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = "";
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement("span");
    letter.className = "letter";
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }

  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

//scroll
function scrollTop() {
  const scrollTop = document.getElementById("navigation");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollTop.classList.add("nav-fixed");
  else scrollTop.classList.remove("nav-fixed");
}
window.addEventListener("scroll", scrollTop);

//clock
var myhour, myminute, mysecond;

function flipNumber(el, newnumber) {
  var thistop = el.find(".top").clone();
  var thisbottom = el.find(".bottom").clone();
  thistop.addClass("new");
  thisbottom.addClass("new");
  thisbottom.find(".textclock").text(newnumber);
  el.find(".top").after(thistop);
  el.find(".top.new").append(thisbottom);
  el.addClass("flipping");
  el.find(".top:not(.new)").find(".textclock").text(newnumber);
  setTimeout(function () {
    el.find(".bottom:not(.new)").find(".textclock").text(newnumber);
  }, 500);
}
function setTime() {
  $(".flipper").removeClass("flipping");
  $(".flipper .new").remove();
  var date = new Date();
  var seconds = date.getSeconds().toString();
  if (seconds.length == 1) {
    seconds = "0" + seconds;
  }
  var minutes = date.getMinutes().toString();
  if (minutes.length == 1) {
    minutes = "0" + minutes;
  }
  var hour = date.getHours();
  if (hour > 12) {
    hour = hour - 12;
  }
  if (hour == 0) {
    hour = 12;
  }
  hour = hour.toString();
  if (hour.length == 1) {
    hour = "0" + hour;
  }
  if ($(myhour[0]).text() !== hour) {
    flipNumber($(myhour[0]).closest(".flipper"), hour);
  }
  if ($(myminute[0]).text() !== minutes) {
    flipNumber($(myminute[0]).closest(".flipper"), minutes);
  }
  if ($(mysecond[0]).text() !== seconds) {
    flipNumber($(mysecond[0]).closest(".flipper"), seconds);
  }
  setTimeout(function () {
    setTime();
  }, 500);
}

$(function () {
  myhour = $(".clock .flipper:nth-child(1) div:not(.new) .textclock");
  myminute = $(".clock .flipper:nth-child(2) div:not(.new) .textclock");
  mysecond = $(".clock .flipper:nth-child(3) div:not(.new) .textclock");
  setTime();
});

//im SO happy with this button, good grace
changeStyles = () =>{
  document.querySelectorAll(".card-fundamental").forEach(box => 
    {
      if(box.classList.contains("base-card-f")){
        box.classList.toggle("second-style-f")
        box.classList.remove("base-card-f")
      }
      else{
        box.classList.remove("second-style-f")
        box.classList.toggle("base-card-f")
      }
    
  
})};

showClock = () =>{
  document.querySelectorAll(".clock-wrapper").forEach(clock => 
    {
      if(clock.classList.contains("ninja")){
        clock.classList.remove("ninja");
      }
      else{
        clock.classList.add("ninja");;
      }
    
  
})};
