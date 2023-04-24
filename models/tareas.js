import Tarea from "./tarea.js";

class Tareas{
    constructor(){
        this.listado = {};
    }

    get listadoDeTareas(){
        //Vamos a separar las tareas, se crea un array vacio para almacenar la informacion de cada tarea.
        let listadoArray = [];
        //el objet keys lo que hace basicamente es convertir en un objeto en un array.
        Object.keys(this.listado).forEach(key=>{ //luego se crea un foreach para que busque de forma individual cada tarea almacenada y la guarde en el nuevo listado.
            const tarea = this.listado[key]
            listadoArray.push(tarea)
            
        })
        return listadoArray
    }

    crearTareas(desc){
        // la tarea se ira almancenando en el listado.

        const tarea = new Tarea(desc);

        //Vinculamos la constante creada.
        this.listado[tarea.id] = tarea;


    }
}

export default Tareas