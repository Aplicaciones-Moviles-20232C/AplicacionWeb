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
        var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (nombre === '') {
              $("#nombre-error").text('El campo Nombre no puede estar vacío.').css('color', 'red').show();
              event.preventDefault();
          } else if (nombre.length < 3 || nombre.length > 5) {
            $("#nombre-error").text('El campo Nombre debe tener entre 3 y 8 caracteres.').css('color', 'red').show();
            event.preventDefault();
        }else {
              $("#nombre-error").hide();
          }
  
          if (apellido === '') {
              $("#apellido-error").text('El campo Apellido no puede estar vacío.').css('color', 'red').show();
              event.preventDefault();
          }else if (apellido.length < 3 || apellido.length > 5) {
            $("#apellido-error").text('El campo Apellido debe tener entre 3 y 8 caracteres.').css('color', 'red').show();
            event.preventDefault();
        }
           else {
              $("#apellido-error").hide();
          }
  
          if (email === '') {
              $("#email-error").text('El campo Correo Electrónico no puede estar vacío.').css('color', 'red').show();
              event.preventDefault();
          }
        else if (!regex.test(email)) {
            $("#email-error").text('El correo electrónico no es válido.').css('color', 'red').show();
            event.preventDefault();
        }
           else {
              $("#email-error").hide();
          }
  
          if (nota === '') {
              $("#nota-error").text('El campo Nota no puede estar vacío.').css('color', 'red').show();
              event.preventDefault();
          } else {
              $("#nota-error").hide();
          }

        });
    });
  }
  
