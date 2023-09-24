import { Information } from "../components/Information.js";

export const RenderizarMasInformacion = () => {
  $("#information").html(Information());
  $(document).ready(function () {
    $("#formulario").submit(function (event) {
      // Validación de campos
      var nombre = $("#nombre").val();
      var apellido = $("#apellido").val();
      var email = $("#email").val();
      var nota = $("#nota").val();
      var informacion = $("#informacion").val();
      var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (nombre === "") {
        $("#nombre-error")
          .text("The Name field cannot be empty.")
          .css("color", "red")
          .show();
        event.preventDefault();
      } else if (nombre.length < 3 || nombre.length > 24) {
        $("#nombre-error")
          .text("The Name field must be between 3 and 8 characters.")
          .css("color", "red")
          .show();
        event.preventDefault();
      } else if (/[\d]/.test(nombre)) {
        $("#nombre-error")
          .text("The Name field cannot contain numbers.")
          .css("color", "red")
          .show();
        event.preventDefault();
      } else {
        $("#nombre-error").hide();
      }

      if (apellido === "") {
        $("#apellido-error")
          .text("The Last Name field cannot be empty.")
          .css("color", "red")
          .show();
        event.preventDefault();
      } else if (apellido.length < 3 || apellido.length > 24) {
        $("#apellido-error")
          .text("The Name field must be between 3 and 8 characters.")
          .css("color", "red")
          .show();
        event.preventDefault();
      } else if (/[\d]/.test(apellido)) {
        $("#apellido-error")
          .text("The Name field cannot contain numbers")
          .css("color", "red")
          .show();
        event.preventDefault();
      } else {
        $("#apellido-error").hide();
      }

      if (email === "") {
        $("#email-error")
          .text("The Last Email field cannot be empty")
          .css("color", "red")
          .show();
        event.preventDefault();
      } else if (!regex.test(email)) {
        $("#email-error")
          .text("The email is not valid.")
          .css("color", "red")
          .show();
        event.preventDefault();
      } else {
        $("#email-error").hide();
      }

      if (nota === "") {
        $("#nota-error")
          .text("The Note field cannot be empty.")
          .css("color", "red")
          .show();
        event.preventDefault();
      } else if (nota.length < 3 || nota.length > 24) {
        $("#nota-error")
          .text("The Note field must be between 3 and 8 characters")
          .css("color", "red")
          .show();
        event.preventDefault();
      } else {
        $("#nota-error").hide();
      }
      if (
        $("#nombre-error").is(":hidden") &&
        $("#apellido-error").is(":hidden") &&
        $("#email-error").is(":hidden") &&
        $("#nota-error").is(":hidden")
      ) {
        event.preventDefault(); // Evita que el formulario se envíe
        Contactarse(nombre, apellido, email, nota);
      }
    });
  });
};

function Contactarse(name, lastName, email, note) {
  var correoAsunto = `Consulta ${name} ${lastName}`;
  var correoMensaje = `Hola, soy ${name} ${lastName} y mi consulta es la siguiente:
  ${note}
  Mi email de contacto es: ${email}`;

  var mailtoLink = `mailto:rilago@protonmail.com?Subject=${correoAsunto}
    &body=${encodeURIComponent(correoMensaje)}`;

  window.location.href = mailtoLink;
  window.location.href = '../../src/views/index.html'
}
