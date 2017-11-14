Feature: Envio y validacion correo

	como usuario de gmail
	yo quiero poder ingresar a mi correo 
	para realizar el envio de un correo electronico
  
  Scenario: enviar correo electronico gmail

     Given ingreso el a la aplicacion gmail sairus.luigui
     When redacto y envio el correo electronico
     Then validacion correo enviado luis.mongui@outlook.com


  Scenario Outline: fallo envio correo

     Given ingreso el a la aplicacion gmail sairus.luigui
     When redacto y envio el correo electronico a destinatario erroneo
     Then validacion correo enviado rebote

  Scenario Outline: enviar correo sin asunto

     Given ingreso el a la aplicacion gmail sairus.luigui
     When redacta correo sin asunto 
     Then validacion mensaje de asunto requerido
     