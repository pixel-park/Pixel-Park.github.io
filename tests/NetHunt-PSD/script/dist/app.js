"use strict";

var requestURL = 'https://jsonplaceholder.typicode.com/posts';
var doc = document;
var iname = doc.getElementById("name");
var errname = doc.getElementById("errname");
var email = doc.getElementById("mail");
var erremail = doc.getElementById("erremail");
var company = doc.getElementById("company");
var errcompany = doc.getElementById("errcompany");
var form = doc.getElementById("form");
var dlbutton = doc.getElementById("dllogo");

var myData = {
  name: 'none',
  email: 'none',
  company: 'none'
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (iname.value.length < 4) {
    iname.classList.add("bad");
    errname.classList.remove("invis");
  } else {
    iname.classList.remove("bad");
    errname.classList.add("invis");
    myData.name = iname.value;
  };
  if (!email.validity.valid) {
    email.classList.add("bad");
    erremail.classList.remove("invis");
  } else {
    email.classList.remove("bad");
    erremail.classList.add("invis");
    myData.email = email.value;
  };
  if (company.value.length < 4) {
    company.classList.add("bad");
    errcompany.classList.remove("invis");
  } else {
    company.classList.remove("bad");
    errcompany.classList.add("invis");
    myData.company = company.value;
  }

  if (!iname.classList.contains('bad') && !email.classList.contains('bad') && !company.classList.contains('bad')) {
    setTimeout(function () {

      var xhr = new XMLHttpRequest();
      xhr.open('POST', requestURL);
      xhr.send(JSON.stringify(myData));

      console.log(JSON.stringify(myData));
      alert("\u0421\u043F\u0430\u0441\u0438\u0431\u043E!\n\u0412\u0430\u0448\u0435 \u0438\u043C\u044F " + myData.name + "\n\u0412\u0430\u0448 Email " + myData.email + " \u0438 \u0432\u0430\u0448\u0430 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F " + myData.company);
      form.reset();
    }, 200);
  }
}, false);
/*----------------------------------navigation--------------------------*/

function downloadbutton() {
  var w = 0;
  var y = 0;
  return window.onresize = window.onload = window.onscroll = function () {
    w = this.innerWidth;
    y = this.pageYOffset;
    if (y >= 600 && w > 980) {
      dlbutton.classList.remove('getout');
    } else if (w < 980 && w > 475 && y >= 0) {
      dlbutton.classList.remove('getout');
    } else if (w < 475 && y >= 0 && y < 250 || y > 750) {
      dlbutton.classList.remove('getout');
    } else {
      dlbutton.classList.add('getout');
    };
    return w;
  };
};

var width = downloadbutton();

function todl() {
  if (width() > 980) {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  } else {
    window.scroll({ top: 290, left: 0, behavior: 'smooth' });
  }
};