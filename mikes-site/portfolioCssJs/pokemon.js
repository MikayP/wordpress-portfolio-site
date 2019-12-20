
window.setInterval(SwapDivsWithClick,200);
window.setInterval(SwapDivsWithClick1,150);

function SwapDivsWithClick(firstImg,secondImg)
{
   d1 = document.getElementById('firstImg');
   d2 = document.getElementById('secondImg');
   if( d2.style.display == "none" )
   {
      d1.style.display = "none";
      d2.style.display = "block";
   }
   else
   {
      d1.style.display = "block";
      d2.style.display = "none";
   }
}

function SwapDivsWithClick1(pikaOne,pikaTwo)
{
   d1 = document.getElementById('pikaOne');
   d2 = document.getElementById('pikaTwo');
   if( d2.style.display == "none" )
   {
      d1.style.display = "none";
      d2.style.display = "block";
   }
   else
   {
      d1.style.display = "block";
      d2.style.display = "none";
   }
}
