import {Bridge} from "./bridge";
import {BridgeDiscovery} from "./bridge-discovery";
import {BridgeLinking} from "./bridge-linking";


// const discovery = new BridgeDiscovery();

const bridge = new Bridge('ecb5fafffe151d59', '192.168.1.242', 'BSB002', 'Hue Bridge - 151D59')
const linking = new BridgeLinking(bridge)
linking.link()

//press any key to exit
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));
