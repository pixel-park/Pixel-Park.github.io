let requestURL = 'https://jsonplaceholder.typicode.com/posts';
const doc = document;
const email = doc.getElementById("mail");
const name = doc.getElementById("name");
const company = doc.getElementById("company");
const form = doc.getElementById("form");

let myData = {
  name : 'none',
  email : 'none',
  company : 'none'
}; 

form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (name.value.length < 4) {
        name.classList.add("bad");  
    } else {name.classList.remove("bad");
    myData.name = name.value;};
    if (!email.validity.valid) {
    email.classList.add("bad"); 
    } else {email.classList.remove("bad");
    myData.email = email.value;};
    if (company.value.length < 4) {
   company.classList.add("bad");   
  } else {company.classList.remove("bad");
  myData.company = company.value;}
 
 if (!name.classList.contains('bad') && !email.classList.contains('bad') && !company.classList.contains('bad')){setTimeout(function(){
      
    let xhr = new XMLHttpRequest();
    xhr.open('POST', requestURL);
    xhr.send(JSON.stringify(myData));
  
    console.log(JSON.stringify(myData));
    alert(`Спасибо!\nВаше имя ${myData.name}\nВаш Email ${myData.email} и ваша компания ${myData.company}`);
    form.reset()
  },200)} 
  }, false); 
 /*----------------------------------navigation--------------------------*/

 function todl() {window.scroll ({top:320, left:0, behavior: 'smooth'});
  window.scroll (0, 320);};
 