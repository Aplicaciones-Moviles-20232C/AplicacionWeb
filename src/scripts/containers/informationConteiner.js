import { Navbar } from "../components/Navbar.js";
import { Information } from "../components/Information.js";
import { hpCharacters } from "./jsonHP.js";
import { GetCharacters, GetCharacterById } from "../services/apiCall.js";
import { EfectoNavbar } from "../effects/Navbar.js";
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
              $("#nombre-error").text('The Name field cannot be empty.').css('color', 'red').show();
              event.preventDefault();
          } else if (nombre.length < 3 || nombre.length > 24) {
            $("#nombre-error").text('The Name field must be between 3 and 8 characters.').css('color', 'red').show();
            event.preventDefault();
        
        }else if (/[\d]/.test(nombre)) {
        $("#nombre-error").text('The Name field cannot contain numbers.').css('color', 'red').show();
        event.preventDefault();
    }else {
              $("#nombre-error").hide();
          }
  
          if (apellido === '') {
              $("#apellido-error").text('The Last Name field cannot be empty.').css('color', 'red').show();
              event.preventDefault();
          }else if (apellido.length < 3 || apellido.length > 24) {
            $("#apellido-error").text('The Name field must be between 3 and 8 characters.').css('color', 'red').show();
            event.preventDefault();
        } else if (/[\d]/.test(apellido)) {
            $("#apellido-error").text('The Name field cannot contain numbers').css('color', 'red').show();
            event.preventDefault();
        }
        
           else {
              $("#apellido-error").hide();
          }
  
          if (email === '') {
              $("#email-error").text('The Last Email field cannot be empty').css('color', 'red').show();
              event.preventDefault();
          }
        else if (!regex.test(email)) {
            $("#email-error").text('The email is not valid.').css('color', 'red').show();
            event.preventDefault();
        }
           else {
              $("#email-error").hide();
          }
  
          if (nota === '') {
              $("#nota-error").text('The Note field cannot be empty.').css('color', 'red').show();
              event.preventDefault();
            }else if (nota.length < 3 || nota.length > 24) {
                $("#nota-error").text('The Note field must be between 3 and 8 characters').css('color', 'red').show();
                event.preventDefault(); 
            }else {
              $("#nota-error").hide();
          }

        });
    });
  }
  
