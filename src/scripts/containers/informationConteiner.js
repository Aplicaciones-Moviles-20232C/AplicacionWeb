import { Navbar } from "../components/Navbar.js";
import { Information } from "../components/Information.js";
import { hpCharacters } from "./jsonHP.js";
import { GetCharacters, GetCharacterById } from "../services/apiCall.js";
import { EfectoNavbar } from "../effects/EfectoNavbar.js";
export const InformationRender = () => {
    let root = document.getElementById("root");
    root.innerHTML += Navbar();
    EfectoNavbar();
    $("#information").html(
      Information(
       ) )
       $(document).ready(function() {
        $("#formulario").submit(function(event) {
            
             // Validación de campos
        var nombre = $("#nombre").val();
        var apellido = $("#apellido").val();
        var email = $("#email").val();
        var nota = $("#nota").val();
        var informacion = $("#informacion").val();
            if (nombre === '') {
              $("#nombre-error").text('El campo Nombre no puede estar vacío.').css('color', 'red').show();
              event.preventDefault();
          } else {
              $("#nombre-error").hide();
          }
  
          if (apellido === '') {
              $("#apellido-error").text('El campo Apellido no puede estar vacío.').css('color', 'red').show();
              event.preventDefault();
          } else {
              $("#apellido-error").hide();
          }
  
          if (email === '') {
              $("#email-error").text('El campo Correo Electrónico no puede estar vacío.').css('color', 'red').show();
              event.preventDefault();
          } else {
              $("#email-error").hide();
          }
  
          if (nota === '') {
              $("#nota-error").text('El campo Nota no puede estar vacío.').css('color', 'red').show();
              event.preventDefault();
          } else {
              $("#nota-error").hide();
          }
  
          if (informacion === '') {
              $("#informacion-error").text('El campo Más Información no puede estar vacío.').css('color', 'red').show();
              event.preventDefault();
          } else {
              $("#informacion-error").hide();
          }

            // Puedes agregar más validaciones aquí según tus requisitos, como validar el formato del correo electrónico o el rango de la nota.
        });
    });
  }
  
