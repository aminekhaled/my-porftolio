/*-------  Js Code  --------*/

var myHeader = document.getElementsByTagName('header')[0],
   pre_img = document.getElementById('pre-img'),
   myScrollTop = 0;

   
if(myScrollTop < 500) {
   setInterval(function() {
      if(pre_img.style.transform === "translateY(0px)") {
         pre_img.style.transform = "translateY(7px)";
      }else {
         pre_img.style.transform = "translateY(0px)"
      }
   }, 1000);
} 



onscroll = function() {
   if(document.documentElement.scrollTop > 0) {
      myHeader.classList.remove('header');
      myHeader.classList.add('header-on-scroll');
   }else {
      myHeader.classList.remove('header-on-scroll');
      myHeader.classList.add('header');
   }
   myScrollTop = document.documentElement.scrollTop;
}
