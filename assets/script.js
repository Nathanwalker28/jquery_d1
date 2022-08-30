let input = $(".input");
let inputNbr1 = $("#input_nombre_1");
let inputNbr2 = $("#input_nombre_2");
let signe = $("select");

input.on("keyup", function() {
    let signeValue = signe.val();
    let inputNbr1Value = inputNbr1.val();
    let inputNbr2Value = inputNbr2.val();

    if (isNaN(inputNbr1Value)) {
        alert("veuillez entrez un nombre valide");
    } 
    if (isNaN(inputNbr2Value)) {
        alert("veuillez entrez un nombre valide");
    }
    
    if (signeValue == "+") {
        var resultat = parseFloat(inputNbr1Value) + parseFloat(inputNbr2Value);
    }
    if (signeValue == "*") {
        var resultat = inputNbr1Value * inputNbr2Value;
    }
    if (signeValue == "/") {
        var resultat = inputNbr1Value / inputNbr2Value;
    }
    if (signeValue == "-") {
        var resultat = inputNbr1Value - inputNbr2Value;
    }
    $("span").text(resultat);
});