const diver = document.getElementById("divs");

diver.addEventListener ("click", function() {
    if (diver){
      alert("Hola! Soy el div");  
    }
});
const saludar = document.getElementById("saludar");

saludar.addEventListener ("click", function(e) {
    
  e.stopPropagation();
    if (saludar){
      alert("Hola!");  
    }
});