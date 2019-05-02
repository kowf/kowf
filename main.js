identity = ['a web developer','a UX enthusiast','a calligrapher','an explorer','a foodie', 'what I wanna be'];

var switchWord = (function () {
  var i = 1;
  return function () {if (i === identity.length) i = 0;
      document.getElementById("whoIAm").innerHTML = identity[i++];}
})();

setInterval(switchWord, 3000);
