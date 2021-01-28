var delay = (ms) => new Promise((res) => setTimeout(res, ms));

var MEET = {
  ClassName: {
    mic: "U26fgb JRY2Pb mUbCce kpROve uJNmj QmxbVb M9Bg4d HNeRed",
    camera: "IYwVEf nAZzG HotEze",
    joinButton: "l4V7wb Fxmcue",
    countMembers: "rua5Nb",
    closeButton: "U26fgb JRY2Pb mUbCce kpROve GaONte Qwoy0d ZPasfd vzpHY",
    fullDetails: "DPvwYc sm8sCf azXnTb",
  },
};

class Lecture {
  constructor() {
    var d = new Date();
    d.setHours(d.getHours() + 1);
    d.setMinutes(0);
    d.setSeconds(0);
    this.joinDate = d;

    this.joined = false;

    this.studentLimit = 0;
  }

  SetStartTime(year, month, day, hours, minutes) {
    this.joinDate = new Date(year, month - 1, day, hours, minutes);
  }

  async AutoJoin() {
    if (this.joined == true) return;

    var d = new Date();
    if (d > this.joinDate) {
      console.log("Joining Lecture");
      this.joined = true;
      await this.Join();
      await this.AutoClose();
      return;
    }

    await delay(2000);
    this.AutoJoin();
  }

  async Join() {
    var mic = document.getElementsByClassName(MEET["ClassName"]["mic"])[0];
    var camera = document.getElementsByClassName(
      MEET["ClassName"]["camera"]
    )[0];
    var join = document.getElementsByClassName(
      MEET["ClassName"]["joinButton"]
    )[0];

    mic === undefined ? null : mic.click();
    camera === undefined ? null : camera.click();

    join.click();

    return;
  }

  CloseWhenLessPpl() {
    var closeBtn = document.getElementsByClassName(
      MEET["ClassName"]["closeButton"]
    )[0];

    if (this.GetNumberNow() < this.studentLimit) {
      closeBtn.click();
      this.joined = false;
    }
  }

  GetNumberNow() {
    var nPeople = document.getElementsByClassName(
      MEET["ClassName"]["countMembers"]
    )[0].innerText;
    nPeople = parseInt(nPeople.replace(/[{()}]/g, ""));
    return nPeople;
  }

  UpdateCloseLimit() {
    var n = this.GetNumberNow();
    if (this.studentLimit < n * 0.6) {
      this.studentLimit = n * 0.6;
      console.log(`Student Limit Updated To: ${this.studentLimit}`);
    }
  }

  async AutoClose() {
    await delay(10 * 1000);

    var pannel = document.getElementsByClassName(
      MEET["ClassName"]["countMembers"]
    )[0];
    if (pannel == undefined) {
      document
        .getElementsByClassName(MEET["ClassName"]["fullDetails"])[0]
        .click();
    }

    await delay(2 * 1000);

    while (1 && this.joined) {
      this.UpdateCloseLimit();
      this.CloseWhenLessPpl();

      await delay(2000);
    }
  }
}

// Entry Point
var L = new Lecture();
L.AutoJoin();
