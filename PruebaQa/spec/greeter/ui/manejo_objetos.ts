import { Target } from 'serenity-js/lib/screenplay-protractor';

import { by } from 'protractor';

export const Objetos = {
    User:     Target.the('usuario gmail').located(by.name('identifier')),
    Clave:    Target.the('password gmail').located(by.name('password')),    
};
export const ObjetosRedactar = {
    BotonRedactar: Target.the('boton redactar').located(by.xpath("//div[@class='z0']/div")),
    Para:     Target.the('correo destinarario gmail').located(by.xpath("//div[@class='oj']/div/textarea[@aria-label='Para']")),
    Asunto:     Target.the('Asunto correo').located(by.name('subjectbox')),
    Cuerpo:     Target.the('detalle asunto ').located(by.xpath("//div[@aria-label='Cuerpo del mensaje']")),
    BotonEnviar: Target.the('boton enviar').located(by.xpath("//div[@class ='J-J5-Ji btA']/div[@role='button']")),
};
export const ObjetosValidacion = {
    Message:   Target.the('Greeter message').located(by.binding('yourName')),
    BotonEnviados: Target.the('boton redactar').located(by.xpath("//span[@class='nU ']/a[@title='Enviados']")),
    Botonbuscar:     Target.the('correo destinarario gmail').located(by.xpath("//div[@id='gs_lc50']/input[@name='q']")),
    InputDestinatario:     Target.the('correo destinarario gmail').located(by.xpath("//div[@id='gs_lc50']/input[@name='q']")),
};

