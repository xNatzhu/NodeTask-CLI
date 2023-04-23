import colors from "colors";
import {inquirerMenu, inquirerPause} from "./helpers/inquirer.js";


//Para crear una funcion asincronoma se agrega el async al lado de ().

const main = async ()=>{
    let opt = ""

    do {
        opt = await inquirerMenu()
        console.log(opt);
        await inquirerPause()
        
    } while (opt !== 0);

}

main()