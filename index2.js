
var i=2;
var toggler= document.querySelector(".toggle");
toggler.addEventListener("click",function(){
  if(i%2==0)
  {
    var a=document.querySelector(".navbar2");
    a.classList.add("display");
    a.classList.remove("hidden");

  }
  else{
    var a=document.querySelector(".navbar2");
    a.classList.remove("display");
    a.classList.add("hidden");
  }
  i++;
});
