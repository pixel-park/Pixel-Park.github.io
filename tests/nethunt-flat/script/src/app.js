let requestURL = 'https://jsonplaceholder.typicode.com/posts';
const doc = document;
const iname = doc.getElementById("name");
const errname = doc.getElementById("errname");
const email = doc.getElementById("mail");
const erremail = doc.getElementById("erremail");
const company = doc.getElementById("company");
const errcompany = doc.getElementById("errcompany");
const form = doc.getElementById("form");
const dlbutton = doc.getElementById("dllogo")

let myData = {
  name : 'none',
  email : 'none',
  company : 'none'
}; 

form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (iname.value.length < 4) {
        iname.classList.add("bad"); 
        errname.classList.remove("invis"); 
    } else {iname.classList.remove("bad");
    errname.classList.add("invis"); 
    myData.name = iname.value;};
    if (!email.validity.valid) {
    email.classList.add("bad");
    erremail.classList.remove("invis"); 
    } else {email.classList.remove("bad");
    erremail.classList.add("invis"); 
    myData.email = email.value;};
    if (company.value.length < 4) {
   company.classList.add("bad"); 
   errcompany.classList.remove("invis");  
  } else {company.classList.remove("bad");
  errcompany.classList.add("invis"); 
  myData.company = company.value;}
 
 if (!iname.classList.contains('bad') && !email.classList.contains('bad') && !company.classList.contains('bad')){setTimeout(function(){
      
    let xhr = new XMLHttpRequest();
    xhr.open('POST', requestURL);
    xhr.send(JSON.stringify(myData));
  
    console.log(JSON.stringify(myData));
    alert(`Спасибо!\nВаше имя ${myData.name}\nВаш Email ${myData.email} и ваша компания ${myData.company}`);
    form.reset()
  },200)} 
  }, false); 
 /*----------------------------------navigation--------------------------*/

function downloadbutton() { 
  let w = 0;
  let y = 0;
return window.onresize = window.onload = window.onscroll = function (){
  w = this.innerWidth;
  y = this.pageYOffset;
  if(y >= 600 && w > 980){
    dlbutton.classList.remove('getout');  
  } else if(w < 980 && w > 475 && y >= 0){
    dlbutton.classList.remove('getout');  
  } else if(w < 475 && y >= 0 && y< 250 || y > 750) {
    dlbutton.classList.remove('getout');  
  } else {dlbutton.classList.add('getout');};
  return w;
}
   };
  
let width = downloadbutton();

 function todl() {
  if(width() > 980){ 
  window.scroll ({top:0, left:0, behavior: 'smooth'});} else {window.scroll ({top:290, left:0, behavior: 'smooth'});}
  };

 