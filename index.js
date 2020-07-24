
var i=2;
var toggler= document.querySelector(".legal");
toggler.addEventListener("click",function(){
  if(i%2==0)
  {
    var a=document.querySelector(".w-nav-overlay");
    a.classList.add("display");
    a.classList.remove("hidden");

  }
  else{
    var a=document.querySelector(".w-nav-overlay");
    a.classList.remove("display");
    a.classList.add("hidden");
  }
  i++;
});
