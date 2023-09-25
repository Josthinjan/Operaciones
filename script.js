document.addEventListener("DOMContentLoaded", function () {
    // Obtener elementos del formulario y resultados
    var formulario = document.querySelector(".formulario");
    var sumaElement = document.getElementById("suma");
    var restaElement = document.getElementById("resta");
    var multiplicacionElement = document.getElementById("multiplicacion");
    var divisionElement = document.getElementById("division");
    var modElement = document.getElementById("mod");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Obtener valores de entrada y convertirlos a números
        var numero1 = parseFloat(document.getElementById("numero1").value);
        var numero2 = parseFloat(document.getElementById("numero2").value);
        var i = 0;
        // Realizar cálculos
        do {
            switch (i) {

                case 1:
                    var suma = numero1 + numero2;
                    break;
                case 2:
                    var resta = numero1 - numero2;
                    break;
                case 3:
                    var multiplicacion = numero1 * numero2;
                    break;
                case 4:
                    var division = numero1 / numero2;
                    break;
                case 5:
                    var mod = numero1 % numero2;
                    break;
                default: ;
            }    i++;
        } while (i < 6)

        // Actualizar los elementos de resultado
        sumaElement.textContent = "Suma: " + suma;
        restaElement.textContent = "Resta: " + resta;
        multiplicacionElement.textContent = "Multiplicación: " + multiplicacion;
        divisionElement.textContent = "División: " + division;
        modElement.textContent = "Módulo: " + mod;
    });
});