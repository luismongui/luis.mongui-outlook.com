import { protractor, browser } from 'protractor';
import { serenity } from 'serenity-js';
import { Actor, BrowseTheWeb, Open, Enter , UseAngular, Wait } from 'serenity-js/lib/screenplay-protractor';

import { IngresarUser ,IngresarPass,IngresarAsunto,SeleccionarBtnRedactar,
IngresarCuerpo,IngresarDestinatario,SeleccionarBtnEnviar, SeleccionarBtnEnviados, SeleccionarBtnBuscarMensaje, IngresarCorreoDestinatario} from '../../spec/greeter/operaciones';
import { CheckIfDisplayedMessage} from '../../spec/greeter/validaciones';

export = function steps() {

    this.setDefaultTimeout(30 * 4000);

const actor = Actor.named("Usuario_Gmail").whoCan(BrowseTheWeb.using(protractor.browser));

  const stage = serenity.callToStageFor({
    actor: (name) => Actor.named(name).whoCan(BrowseTheWeb.using(protractor.browser)),
  });


    this.Given(/ingreso el a la aplicacion gmail (.*)/, function(usuario:string) {
        return stage.theActorInTheSpotlight().attemptsTo(
            UseAngular.disableSynchronisation(),
            Open.browserOn('https://mail.google.com/mail/u/0/'),
            IngresarUser.of(usuario),
            IngresarPass.of("1073696475"),
        );
    });
    
    this.When(/redacto y envio el correo electronico/, function() {
        return stage.theActorInTheSpotlight().attemptsTo(
            SeleccionarBtnRedactar.selec(),
            IngresarDestinatario.of("lmongui@qvision.com.co"),            
            IngresarAsunto.of("prueba"),            
            IngresarCuerpo.of("prueba concepto"),
            SeleccionarBtnEnviar.selec(),  
            
                       
        );
    });

    this.Then(/^validacion correo enviado (.*)/, function(message:string) {
        return stage.theActorInTheSpotlight().attemptsTo(
            SeleccionarBtnEnviados.selec(),
            SeleccionarBtnBuscarMensaje.selec(), 
            IngresarCorreoDestinatario.of(message),
            CheckIfDisplayedMessage.reads(message),
        );
    });
    
};
