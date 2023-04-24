import { v4 as uuidv4 } from 'uuid';

class Tarea{
    constructor(description){
        this.description = description
        this.id = uuidv4();
        this.creationDate = false;
    }
}

export default Tarea