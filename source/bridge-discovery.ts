import {Bridge} from "./bridge";
import {Browser, RemoteService, Service} from "bonjour";
const bonjour = require('bonjour')()

export class BridgeDiscovery {
    bridges: Bridge[];
    browser: Browser;

    constructor() {
        this.bridges = []
        this.browser = bonjour.find({ type: 'hue' }, (service: RemoteService) => {
            console.log('Found an HTTP server:', service)
            this.bridges.push(new Bridge(service.txt.bridgeid, service.addresses[0], service.txt.modelid, service.name))
            console.log(this.bridges[0])
            this.browser.stop()
        })
    }

    discover() {
        this.browser = bonjour.find({ type: 'hue' }, (service: RemoteService) => {
            console.log('Found an HTTP server:', service)
            this.bridges.push(new Bridge(service.txt.bridgeid, service.addresses[0], service.txt.modelid, service.name))
        })
    }

    callback(service: Service) {
        console.log('Found an HTTP server:', service)
        this.bridges.push(new Bridge(service.txt.bridgeid, service.addresses[0], service.txt.modelid, service.name))
    }

    stop() {
        this.browser.stop()
    }

    start() {
        this.browser.start()
    }

    getBridges(): Bridge[] {
        return this.bridges;
    }
}
