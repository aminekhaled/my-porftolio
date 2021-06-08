/*-------  Js Code  --------*/

var myHeader = document.getElementsByTagName('header')[0],
   pre_img = document.getElementById('pre-img'),
   myScrollTop = 0,
   Down = document.getElementsByClassName('down')[0],
   Brithness_btn = document.getElementsByClassName('brithness')[0],
   nav = document.getElementsByTagName('nav')[0],
   showNav = document.getElementsByClassName('show-nav-bar')[0],
   hideNav = document.getElementsByClassName('hide-nav-bar')[0];

   showNav.onclick = function() {
      nav.style.display = "unset";
      hideNav.style.display = "unset";
   }
   hideNav.onclick = function() {
      nav.style.display = "none";
      this.style.display = "none";
   }



window.onresize = function() {
   if(this.innerWidth < 1000) {
      console.log("Yes");
   }
}


   
if(myScrollTop < 500) {
   setInterval(function() {
      if(pre_img.style.transform === "translateY(0px)") {
         pre_img.style.transform = "translateY(10px)";
      }else {
         pre_img.style.transform = "translateY(0px)";
      }
   }, 2000);
} 



onscroll = function() {
   if(document.documentElement.scrollTop > 0) {
      myHeader.classList.remove('header');
      myHeader.classList.add('header-on-scroll');
   }else {
      myHeader.classList.remove('header-on-scroll');
      myHeader.classList.add('header');
   }
}

Down.onclick = function () {
   document.documentElement.scrollTop = 700;
}
/*
Brithness_btn.onclick = function () {
   document.body.style.backgroundColor = 'black';
}*/