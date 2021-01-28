var nPeopleClassName = "rua5Nb";
var closeButtonClassName =
  "U26fgb JRY2Pb mUbCce kpROve GaONte Qwoy0d ZPasfd vzpHY";
var fullDetailsClassName = "DPvwYc sm8sCf azXnTb";

var studentLimit = 0;

var delay = (ms) => new Promise((res) => setTimeout(res, ms));

function CloseWhenLessPpl(n) {
  var closeBtn = document.getElementsByClassName(closeButtonClassName)[0];

  if (GetNumberNow() < n) {
    closeBtn.click();
  }
}

function GetNumberNow() {
  var nPeople = document.getElementsByClassName(nPeopleClassName)[0].innerText;
  nPeople = parseInt(nPeople.replace(/[{()}]/g, ""));
  return nPeople;
}

function UpdateCloseLimit() {
  var n = GetNumberNow();
  if (studentLimit < n * 0.6) {
    studentLimit = n * 0.6;
    console.log(`Student Limit Updated To: ${studentLimit}`);
  }
}

function CONSTANTLOOP() {
  // Main Code
  UpdateCloseLimit();
  CloseWhenLessPpl(studentLimit);

  // Pause Time
  setTimeout(CONSTANTLOOP, 2000);
}

var Init = async () => {
  await delay(10 * 1000);

  var pannel = document.getElementsByClassName(nPeopleClassName)[0];
  if (pannel == undefined) {
    document.getElementsByClassName(fullDetailsClassName)[0].click();
  }

  await delay(2 * 1000);

  while (1) {
    UpdateCloseLimit();
    CloseWhenLessPpl(studentLimit);

    await delay(2000);
  }
};

Init();
