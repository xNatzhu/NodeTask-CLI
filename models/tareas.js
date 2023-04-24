import Tarea from "./tarea.js";

class Tareas{
    constructor(){
        this.listado = {};
    }

    crearTareas(desc){
        // la tarea se ira almancenando en el listado.

        const tarea = new Tarea(desc);
        
        //Vinculamos la constante creada.
        this.listado[tarea.id] = tarea;
    }
}

export default Tareas