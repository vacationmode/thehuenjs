import {Bridge} from "./bridge";
import {BridgeDiscovery} from "./bridge-discovery";


const discovery = new BridgeDiscovery();

//press any key to exit
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));