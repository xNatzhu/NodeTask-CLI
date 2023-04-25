import fs from "fs"


const guardarDb = (data)=>{

    const archivo = "./db/data.json"
    fs.writeFileSync(archivo, JSON.stringify(data)); //guardamos archivo // y trasformamos la data en un json de forma string.
}

export default guardarDb