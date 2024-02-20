# discord.js-v14-template by [frannfreire](https://frannfreire.com)
![node-current](https://img.shields.io/node/v/discord.js?style=flat-square)
![license](https://img.shields.io/github/license/GreenScreen410/discord.js-v14-template?style=flat-square)

## English

**/commands** - This folder contains commands.<br/>
**/events** - This folder contains files related to discord.js events. (Like "ready", "interactionCreate")<br/>
**/handler**  - This folder contains files read files from the command folder.<br/>
**/models**  - This folder contains models to mongodb database.<br/>
**index.js** - This is the main file to run the bot.<br/>
**package-lock.json** - This is a file related to the npm package.<br/>
**package.json** - This is a file related to the npm package.

1 First, type `npm install` in your console.<br/>
2 You need to rename the .env.example file to .env and modify the [bot token](https://discord.com/developers/applications) and add the [connection url](https://www.mongodb.com/docs/manual/reference/connection-string/) to the database in mongodb.<br/>
4 Go to handler > index.js and change "CHANGE THIS FOR YOUR GUILD ID" to your bot testing server ID.</br>
You don't have to worry that the command will be registered on all servers to which the bot is connected in a few hours.</br>
5 Type `npm start` or `node .` in your console.

You can check installed modules by `npm ls`.

## Español

**/commands** - Esta carpeta contiene comandos.<br/>
**/events** - Esta carpeta contiene archivos relacionados con los eventos de discord.js (como "ready", "interactionCreate").<br/>
**/handler** - Esta carpeta contiene archivos que leen archivos de la carpeta de comandos.<br/>
**/models** - Esta carpeta contiene modelos para la base de datos de MongoDB.<br/>
**index.js** - Este es el archivo principal para ejecutar el bot.<br/>
**package-lock.json** - Este es un archivo relacionado con el paquete npm.<br/>
**package.json** - Este es un archivo relacionado con el paquete npm.

1 Primero, escribe `npm install` en tu consola.<br/>
2 Necesitas cambiar el nombre del archivo .env.example a .env y modificar el [token del bot](https://discord.com/developers/applications) y agregar la [URL de conexión](https://www.mongodb.com/docs/manual/reference/connection-string/) a la base de datos en MongoDB.<br/>
4 Ve a handler > index.js y cambia "CAMBIA ESTO POR EL ID DE TU SERVIDOR" por el ID de tu servidor de pruebas del bot.</br>
No tienes que preocuparte de que el comando se registre en todos los servidores a los que el bot está conectado en unas pocas horas.</br>
5 Escribe `npm start` o `node .` en tu consola.

Puedes verificar los módulos instalados con `npm ls`.