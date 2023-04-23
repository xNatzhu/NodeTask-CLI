import colors from "colors";
import readline from "readline";
import inquirer from 'inquirer';

const menu = ()=>{
    console.log("=========================".green);
    console.log("Panel de la App".green);
    console.log("========================= \n".green);//altgr + } = ` ----  altgr + ? = \

    console.log(`${"1.".green} Crear tareas`);
    console.log(`${"2.".green} Listar tareas`);
    console.log(`${"3.".green} Listar tareas completadas`);
    console.log(`${"4.".green} Listar tareas pendientes`);
    console.log(`${"5.".green} Borrar tareas`);
    console.log(`${"0.".green} Salir \n`);
    const rl = readline.createInterface({
        input:process.stdin, //pausara la aplicacion. Y permitira que el usuario interactua en la consola agregue un caracter, o un enter.
        output:process.stdout, //Para mostrar un mensaje al usuario
    })

    //question; Para mostrar la informacion al usuario con la pregunta es decir se conecta al stdout.
    rl.question("Seleccione una opcion: ",(resp)=>{
        //Una vez que ejecuta la pregunta, hara un callback que esperara como argumento la respuesta del usuario.
        console.log(resp);

        rl.close() //Hara que el proceso del readline finalice cuando la misma añada una respuesta, sino seguira esperando.
    });
}

export default menu