var volgorde= document.getElementById("volgorde");
var omgekeerde= document.getElementById("omgekeerde");
var vraag= "";
var namen=[];

vraag_namen();
function vraag_namen(){
    vraag= parseInt(prompt("Hoeveel namen wilt u in de array stoppen?(minimaal 3)", "3"));
    if(vraag >= 3){
        for (var a = 0; a < vraag; a++) {
            namen.push(prompt("Welke naam wilt u in de array stoppen?", "Naam"));   
        }
    } else {
        alert("U heeft niet de minimale hoeveelheid gegeven.");
        vraag= parseInt(prompt("Hoeveel namen wilt u in de array stoppen?(minimaal 3)", "3"));
    }
    
    volgorde.innerHTML = namen;
    omgekeerde.innerHTML = namen.reverse();
}




