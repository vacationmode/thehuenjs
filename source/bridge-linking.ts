import {Bridge} from "./bridge";
import * as fs from "fs";
import * as https from "https";
import * as process from "process";
import * as console from "console";

export class BridgeLinking {
    ca = fs.readFileSync('resources/signify_ca_hue_bridge.pem');
    body = '{"devicetype":"app_name#instance_name", "generateclientkey":true}'
    options = {}

    constructor(bridge: Bridge) {
        this.options = {
            hostname: bridge.ip,
            path: '/api',
            method: 'POST',
            ca: this.ca,
            servername: bridge.id
        }
    }

    link() {
        const req = https.request(this.options, (res) => {
            console.log('statusCode:', res.statusCode);
            console.log('headers:', res.headers);

            res.on('data', (d) => {
                process.stdout.write(d);
            });
        });

        req.on('error', (e) => {
            console.error(e);
        });

        req.write(this.body)
        req.end();
    }
}
