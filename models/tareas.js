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

    cargarTarea(tarea = []){
        //Hacemos un metodo que nos permita cargar los datos en la DB.

        // Lo que realiza es traer todas las tarea de la DB como argumento.
        tarea.map(tarea=>{
            //Luego mapeamos el objeto tareas en porciones de tareas inviduales para poder guardarlas y almacenarlas en listado.
            this.listado[tarea.id] = tarea;
        })

    }
    listadoCompletado(){
        console.log();
        const listadoArray = this.listadoDeTareas

        listadoArray.map((tarea, index)=>{
            let id = index + 1
            if(tarea.completed){
                return console.log(`${(id+". ").green} ${tarea.description} - ${"Tarea Completada".green}`)
            }else{
                return console.log(`${(id+". ").green} ${tarea.description} - ${"Tarea Pendiente".red}`)
            }
        })
        return "";
    }

    crearTareas(desc){
        // la tarea se ira almancenando en el listado.

        const tarea = new Tarea(desc);

        //Vinculamos la constante creada.
        this.listado[tarea.id] = tarea; //vamos especificar que en el listado queremos que nos este guardando la tarea.id, una vez que lo seleccione guardara su tarea

    }
}

export default Tareas