import colors from "colors";
import guardarDb from "./helpers/guardarArchivo.js";
import {inquirerMenu, inquirerPause,inquirerInput} from "./helpers/inquirer.js";
import Tareas from "./models/tareas.js";


//Para crear una funcion asincronoma se agrega el async al lado de ().

const main = async ()=>{
    let opt = ""
    const tareas = new Tareas()
    do {
        opt = await inquirerMenu()
        switch (opt) {
            case 1:
                const desc = await inquirerInput("Describa tu tarea: ", "Descripcion")
                tareas.crearTareas(desc)
                console.log(desc);
                break;
            case 2:
                console.log(tareas.listadoDeTareas)
                break;        

        }
        
        //envio de informacion del listado de tareas para el almacenamiento de la data.
        guardarDb(tareas.listadoDeTareas)





        await inquirerPause()
        
    } while (opt !== 0);

}

main()