import fs from "fs"

//main db
const archivo = "./db/data.json"


//interacciones
const guardarDb = (data)=>{
    fs.writeFileSync(archivo, JSON.stringify(data)); //guardamos archivo // y trasformamos la data en un json de forma string.
}

const leerDb = ()=>{

    if(!fs.existsSync(archivo)){
        //existSync es un metodo de FS para coloborar si existe o no existe el respectivo archivo. En el caso que no exista dara null.
        return null
    }

    let info = fs.readFileSync(archivo,{encoding:"utf-8"}) //el encoding: sirve para poder intepretar de lenguaje de maquina a lenguaje humano.
    const data = JSON.parse(info)
    return data
}

export  {guardarDb, leerDb}