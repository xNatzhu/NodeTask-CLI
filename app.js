import colors from "colors";
import {guardarDb, leerDb} from "./helpers/interaccionesDb.js";
import {inquirerMenu, inquirerPause,inquirerInput, inquirerTareaBorrar, inquirerConfirmar} from "./helpers/inquirer.js";
import Tareas from "./models/tareas.js";


//Para crear una funcion asincronoma se agrega el async al lado de ().

const main = async ()=>{
    let opt = ""

    const tareas = new Tareas()

    const leer = leerDb()
    
    if(leer){
        tareas.cargarTarea(leer)
    }
    
    do {
        opt = await inquirerMenu()
        switch (opt) {
            case 1:
                const desc = await inquirerInput("Describa tu tarea: ", "Descripcion")
                tareas.crearTareas(desc)
                console.log(desc);
                break;
            case 2:
                console.log(tareas.listadoCompletado())
                break;
                
            case 3:
                console.log(tareas.listarTareasPendientesCompletadas(true));
                break

            case 4: 
                console.log(tareas.listarTareasPendientesCompletadas(false));
                break

            case 6:
                const id = await inquirerTareaBorrar(tareas.listadoDeTareas) // el await va esperar que la tarea finalice.
                const confirmar = await inquirerConfirmar("¿Desea eliminar esta tarea?")
                if(confirmar){
                    tareas.eliminarTarea(id);
                    console.log("La tarea fue eliminada exitosamente.");
                }
                
                break
        }
        //envio de informacion del listado de tareas para el almacenamiento de la data.
        guardarDb(tareas.listadoDeTareas)
        await inquirerPause()
        
    } while (opt !== 0);

}

main()