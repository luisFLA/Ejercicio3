document.getElementById("conversionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let valor = parseFloat(document.getElementById("valor").value);
    let conversion = document.getElementById("conversion").value;
    let resultado = document.getElementById("resultado");

    if (isNaN(valor) || valor <= 0) {
        resultado.textContent = "Ingrese un valor válido mayor a 0.";
        resultado.classList.replace("alert-info", "alert-danger");
        resultado.style.display = "block";
        return;
    }

    let conversionResultado;
 
    switch (conversion) {
        case "km-m":
            conversionResultado = `${valor} km = ${valor * 1000} metros`;
            break;
        case "m-cm":
            conversionResultado = `${valor} m = ${valor * 100} centímetros`;
            break;
        case "ft-in":
            conversionResultado = `${valor} ft = ${valor * 12} pulgadas`;
            break;
        case "yd-in":
            conversionResultado = `${valor} yardas = ${valor * 36} pulgadas`;
            break;
        default:
            resultado.textContent = "Seleccione una opción válida.";
            resultado.classList.replace("alert-info", "alert-danger");
            resultado.style.display = "block";
            return;
    }

    resultado.textContent = conversionResultado;
    resultado.classList.replace("alert-danger", "alert-info");
    resultado.style.display = "block";
});
