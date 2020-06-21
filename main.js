// $(function() {

//     $("#tv2").mousewheel(function(event, delta) {
 
//        this.scrollLeft -= (delta * 30);
     
//        event.preventDefault();
 
//     });
 
//  });
 function show(){
 $(".preview").animate({scrollTop:3000}, 800, 'swing', );
   document.querySelector("#tv3").style.display="flex";
 }

//  function hide(){
//     document.querySelector(".top").style.opacity=0.3;
//  }

// var scrollInterval = setInterval(show(){ 
//    document.querySelector(".preview").scrollTop = document.documentElement.scrollHeight;
// }, 50);

function left(){
  document.querySelector(".preview0").style.boxShadow = "5px 5px 10px black ";
  document.querySelector("#tv1").style.boxShadow = "50px 10px 1200px black inset";
  document.querySelector(".preview").style.opacity = 0.3;

}
function left2(){
  document.querySelector(".preview0").style.boxShadow = "none";
  document.querySelector(".preview").style.opacity = 1;

}
function right(){
  document.querySelector(".preview").style.boxShadow = "-5px -5px 10px black ";
  document.querySelector(".preview0").style.opacity = 0.3;
  document.querySelector(".top").style.opacity = 0.3;
  document.querySelector(".preview").style.zIndex = 200;


}
function right2(){
  document.querySelector(".preview").style.boxShadow = "none";
  document.querySelector(".preview0").style.opacity = 1;
  document.querySelector(".top").style.opacity = 1;
}