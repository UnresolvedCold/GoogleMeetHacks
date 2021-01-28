var year = 2021;
var month = 1;
var day = 28;
var hours = 7;
var minutes = 59;
var joinDate = new Date(year, month-1, day, hours, minutes); // 24 hr clock

function Join() {
  var mic = document.getElementsByClassName(
    "U26fgb JRY2Pb mUbCce kpROve uJNmj QmxbVb M9Bg4d HNeRed"
  )[0];
  var camera = document.getElementsByClassName("IYwVEf nAZzG HotEze")[0];
  var join = document.getElementsByClassName("l4V7wb Fxmcue")[0];

  mic === undefined ? null : mic.click();
  camera === undefined ? null : camera.click();

  join.click();
}

function LOOPJOIN() {
  var d = new Date();
  if (d > joinDate) {
    console.log("connected");
    Join();
    return;
  }
  console.log("Waiting");
  console.log(d);
  console.log(joinDate);
  setTimeout(LOOPJOIN, 2000);
}

LOOPJOIN();
