import { Scroll, See, Task, Text } from 'serenity-js/lib/screenplay-protractor';

import { ObjetosValidacion,Objetos } from './ui/manejo_objetos';

import chai = require('chai');
import chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

export const CheckIfDisplayedMessage = {
    reads: (expectedMessage: string) => Task.where(`correo enviado "${expectedMessage}"`,
        Scroll.to(ObjetosValidacion.InputDestinatario),
        See.if(Text.of(ObjetosValidacion.InputDestinatario), equals(expectedMessage)),
    ),
}


const expect = chai.expect;

export const equals = (expected: string) => (actual: PromiseLike<string>) => expect(actual).to.eventually.equal(expected)
