"use strict";

var requestURL = 'https://jsonplaceholder.typicode.com/posts';
var doc = document;
var email = doc.getElementById("mail");
var name = doc.getElementById("name");
var company = doc.getElementById("company");
var form = doc.getElementById("form");

var myData = {
  name: 'none',
  email: 'none',
  company: 'none'
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (name.value.length < 4) {
    name.classList.add("bad");
  } else {
    name.classList.remove("bad");
    myData.name = name.value;
  };
  if (!email.validity.valid) {
    email.classList.add("bad");
  } else {
    email.classList.remove("bad");
    myData.email = email.value;
  };
  if (company.value.length < 4) {
    company.classList.add("bad");
  } else {
    company.classList.remove("bad");
    myData.company = company.value;
  }

  if (!name.classList.contains('bad') && !email.classList.contains('bad') && !company.classList.contains('bad')) {
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

function todl() {
  window.scroll({ top: 320, left: 0, behavior: 'smooth' });
  window.scroll(0, 320);
};