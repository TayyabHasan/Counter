var buttonPlus = document.getElementById("Add"); 
var buttonMinus = document.getElementById("Sub");
var text = document.getElementById("data");

buttonPlus.addEventListener("click",function(event) {
   console.log(event)
    var value = text.innerHTML;
    text.innerHTML = parseInt(value,10) + 1;
    
});


buttonMinus.addEventListener("click",function(evemt) {
    var value = text.innerHTML;
    text.innerHTML = parseInt(value,10) - 1;
    
});