# Serenity/JS Cucumber

manejo de serenity js



## Prerequisites
 
To use this project you'll need:
- Node.js - ideally an [LTS version](https://nodejs.org/en/download/) 
- Java 8 - [OpenJDK](http://www.azul.com/downloads/zulu/) or [Oracle](http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html)
 
## Commands

```
npm install   - Installs the dependencies
npm test      - Runs the tests and creates a test execution report
                (it will also download WebDriver and the Serenity BDD CLI jar for you)
npm run clean - cleans the target/ directory, where the reports are generated                     


#recomendaciones
npm install protractor  instalar en caso de no reconocer comandos
serenity-manager update sirve para actualizar geckodriver y webdriver
npm install serenity-cli --save-dev en caso de no generar el reporte correctamente