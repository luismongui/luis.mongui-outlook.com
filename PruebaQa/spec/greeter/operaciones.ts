import {  Is, Scroll, Task, Wait, Click } from 'serenity-js/lib/screenplay-protractor';
import { Enter, Open, UseAngular } from 'serenity-js/lib/serenity-protractor';
import { Objetos ,ObjetosRedactar, ObjetosValidacion } from './ui/manejo_objetos';
import { protractor } from 'protractor/built/ptor';

export const IngresarUser = {
    of: (name: string) => Task.where(`nombre usuario ${name}`,
        Wait.until(Objetos.User, Is.visible()),
        Scroll.to(Objetos.User),
        Enter.theValue(name).into(Objetos.User).thenHit(protractor.Key.ENTER),        
    ),
}
export const IngresarPass = {
    of: (clave: string) => Task.where(`clave usuario ${clave}`,
    Wait.until(Objetos.Clave, Is.visible()),
    Scroll.to(Objetos.Clave),
    Enter.theValue(clave).into(Objetos.Clave).thenHit(protractor.Key.ENTER), 
),
}
export const SeleccionarBtnRedactar = {    
    selec: () => Task.where(`seleccionar btn `,
    Wait.until(ObjetosRedactar.BotonRedactar, Is.visible()),
    Scroll.to(ObjetosRedactar.BotonRedactar),
    Click.on(ObjetosRedactar.BotonRedactar),
),
}

export const SeleccionarBtnEnviar = {    
    selec: () => Task.where(`seleccionar btnenviar `,
    Wait.until(ObjetosRedactar.BotonEnviar, Is.visible()),
    Scroll.to(ObjetosRedactar.BotonEnviar),
    Click.on(ObjetosRedactar.BotonEnviar),
),
}
export const SeleccionarBtnEnviados = {    
    selec: () => Task.where(`seleccionar enviados `,
    Wait.until(ObjetosValidacion.BotonEnviados, Is.visible()),
    Scroll.to(ObjetosValidacion.BotonEnviados),
    Click.on(ObjetosValidacion.BotonEnviados),
),
}
export const SeleccionarBtnBuscarMensaje = {    
    selec: () => Task.where(`buscar mensaje enviado `,
    Wait.until(ObjetosValidacion.Botonbuscar, Is.visible()),
    Scroll.to(ObjetosValidacion.Botonbuscar),
    Click.on(ObjetosValidacion.Botonbuscar),
),
}
export const IngresarCorreoDestinatario = {    
    of: (para: string) => Task.where(`nombre destinatario ${para}`,
    Wait.until(ObjetosValidacion.InputDestinatario, Is.visible()),
    Scroll.to(ObjetosValidacion.InputDestinatario),
    Enter.theValue(para).into(ObjetosValidacion.InputDestinatario).thenHit(protractor.Key.ENTER),        
),
}

export const IngresarDestinatario = {    
        of: (para: string) => Task.where(`nombre destinatario ${para}`,
        Wait.until(ObjetosRedactar.Para, Is.visible()),
        Scroll.to(ObjetosRedactar.Para),
        Enter.theValue(para).into(ObjetosRedactar.Para).thenHit(protractor.Key.ENTER),        
    ),
    }
    export const IngresarAsunto = {    
        of: (asunto: string) => Task.where(`asunto correo ${asunto}`,
        Wait.until(ObjetosRedactar.Asunto, Is.visible()),
        Scroll.to(ObjetosRedactar.Asunto),
        Enter.theValue(asunto).into(ObjetosRedactar.Asunto).thenHit(protractor.Key.ENTER),        
    ),
    }
    export const IngresarCuerpo = {    
        of: (cuerpo: string) => Task.where(`detalle correo ${cuerpo}`,
        Wait.until(ObjetosRedactar.Cuerpo, Is.visible()),
        Scroll.to(ObjetosRedactar.Cuerpo),
        Enter.theValue(cuerpo).into(ObjetosRedactar.Cuerpo).thenHit(protractor.Key.TAB),        
    ),
    }
    