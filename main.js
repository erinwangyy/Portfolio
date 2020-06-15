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

