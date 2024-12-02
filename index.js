import {childprocesses} from '/workspaces/PROYECTOFINAL/child-processes.js'
import {ipc} from '/workspaces/PROYECTOFINAL/ipc.js'
import {ProcessesState} from '/workspaces/PROYECTOFINAL/procesess-state.js'

console.log("🌟Programa de procesosos🌟")
let option= process.argv[2];
switch (option) {
    case "1":
        childprocesses();
        break;
    case "2":
        ipc();
        break;
    case "3":
        ProcessesState();
        break;
    default:
        console.log("😢 opcion invalida");
    break;
}