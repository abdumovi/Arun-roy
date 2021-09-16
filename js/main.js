let elButon = document.querySelector('.nav-dark');
let elBody = document.querySelector('.all-elements');
let elLogo = document.querySelector('.arun-logo');

elButon.addEventListener('click',function(){
  elBody.classList.toggle('darkmode');
  // elLogo.classList.add('colorf')
});