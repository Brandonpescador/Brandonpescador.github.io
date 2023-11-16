function formatearCadena(event) {
    let entrada = document.getElementById("cadenaInput").value.trim();
  
    // Reemplazar tabuladores, retornos de carro y múltiples espacios por un solo espacio
    entrada = entrada.replace(/\s+/g, ' ');
  
    // Ajustar palabras antes de un punto o una coma
    entrada = entrada.replace(/(\w+)\s+([.,])/g, "$1$2");
  
    // Convertir a formato de nombre propio
    entrada = entrada.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  
    document.getElementById("resultado").innerText = entrada;
}
