/* Actividad  B3 
A partir del código proporcionado en ejercicioB3.html, observa que realiza el código y 
añádele el código DOM necesario para que también cambie el color de fondo de pantalla de 
forma aleatoria cada vez que aumentamos el texto. */

function estilos(){
    var tam = 12; // font size en pt
    document.body.style.background = "blue";
    msj = document.getElementById("dato");
    msj.style.color = "yellow";
    while ( confirm("Letra más grande?") ) {
        tam += 4;
        msj.style.font = "bold italic "+tam+"pt Verdana";
        //Para cambiar el color de fondo de manera aleatoria
        document.body.style.backgroundColor = 
          "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    }   
}