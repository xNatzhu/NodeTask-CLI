import { v4 as uuidv4 } from 'uuid';

class Tarea{
    constructor(description){
        this.description = description
        this.id = uuidv4();
        this.completed = false;
        this.taskDate = null;
    }
}

export default Tarea