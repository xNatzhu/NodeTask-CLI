import inquirer from 'inquirer';
import colors from "colors";

const preguntas = [{
    type:"list",//Vamos a decir a nuestra dependencia que nos almacene como listado.
    name:"opcion", //va ser el nombre que le voy estar dando a lista.
    message:"¿Que desea realizar?", //Este va ser el mensaje va imprimir, arriba como titulo a la hora de mostrar las opciones.
    choices: [
        { //Esta van ser las opciones que va estar manejando. Se pueden pasar una lista o un objeto. 
            value:1, //el id que va tener el numero de la lista
            name:"1. Crear tarea", //el nombre de la lista
        
        },
        {
            value:2,
            name:"2. Listar tareas",
        
        },
        {
            value:3,
            name:"3. Listar tareas completadas",
        
        },
        {
            value:4,
            name:"4. Listar tareas pendientes",
        
        },
        {
            value:5,
            name:"5. Completar tarea(s)",
        
        },
        {
            value:6,
            name:"6. Borrar tarea",
        
        },
        {
            value:0,
            name:"0. Salir",
        
        },

    ], //Esta van ser las posibles opciones que van tener la lista
}]
const inquirerMenu = async()=>{
    console.clear()
    console.log("=========================".green);
    console.log("Panel de la App".green);
    console.log("========================= \n".green);//altgr + } = ` ----  altgr + ? = \

    const { opcion } = await inquirer.prompt(preguntas) //El prompt en la dependencia esta esperando recibir el objeto que va estar almacenando las preguntas con sus opciones.
    return opcion
}

const inquirerPause = async()=>{
    const preguntas = [{
        type:"input",
        name:"inputCaracter",
        message:`Presione ${"ENTER".green} para continuar`,
    }]
    console.log("\n");
    const {inputCaracter} = await inquirer.prompt(preguntas);

    return inputCaracter
}


const inquirerInput = async(message)=>{
    const inputPreguntas = [{
        type:"input",
        name:"desc",
        message,
        validate(value){
            if(value.length === 0){
                return "Porfavor ingrese un valor";
            }
            return true
        }
    }]

    const {desc} = await inquirer.prompt(inputPreguntas);
    return desc

}

export {inquirerMenu, inquirerPause, inquirerInput}


