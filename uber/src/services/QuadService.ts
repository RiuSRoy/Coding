import { Cab } from "../models/Cab";
import { Quad } from "../models/Quad";
import { Location } from "../models/Trip";

export class QuadService {

    quad: Quad;

    static quadId = 0;
    constructor(centre: Location, halfHeight: number, halfWidth: number, parentQuad: Quad) {
        this.quad = {
            centre,
            halfWidth,
            halfHeight,
            status: "EMPTY_LEAF",
            nwChild: null,
            neChild: null,
            seChild: null,
            swChild: null,
            id: QuadService.quadId,
            parentQuad
        }
        QuadService.quadId++;
    }


    insertCab(cab: Cab, loc: Location) {
        if (!cab || !loc) {
            return;
        }
        if (!this.containsLoc(loc)) {
            return;
        }
        if (this.quad.status === "EMPTY_LEAF") {
            this.quad.cab = cab;
            this.quad.status = "FILLED_LEAF"
        }
        else if (this.quad.status === "FILLED_LEAF") {
            this.quad.status = "DIVIDED_NODE"
            this.quad.neChild = {
                centre: {
                    lat: this.quad.centre.lat + this.quad.halfWidth/2,
                    lon: this.quad.centre.lon + this.quad.halfHeight/2
                },
                halfWidth: this.quad.halfWidth/2,
                halfHeight: this.quad.halfHeight/2,
                status: "EMPTY_LEAF",
                nwChild: null,
                neChild: null,
                seChild: null,
                swChild: null,
                id: QuadService.quadId,
                parentQuad: this.quad
            }
            QuadService.quadId++;
            this.quad.nwChild = {
                centre: {
                    lat: this.quad.centre.lat - this.quad.halfWidth/2,
                    lon: this.quad.centre.lon + this.quad.halfHeight/2
                },
                halfWidth: this.quad.halfWidth/2,
                halfHeight: this.quad.halfHeight/2,
                status: "EMPTY_LEAF",
                nwChild: null,
                neChild: null,
                seChild: null,
                swChild: null,
                id: QuadService.quadId,
                parentQuad: this.quad
            }
            QuadService.quadId++;
            this.quad.seChild = {
                centre: {
                    lat: this.quad.centre.lat + this.quad.halfWidth/2,
                    lon: this.quad.centre.lon - this.quad.halfHeight/2
                },
                halfWidth: this.quad.halfWidth/2,
                halfHeight: this.quad.halfHeight/2,
                status: "EMPTY_LEAF",
                nwChild: null,
                neChild: null,
                seChild: null,
                swChild: null,
                id: QuadService.quadId,
                parentQuad: this.quad
            }
            QuadService.quadId++;
            this.quad.swChild = {
                centre: {
                    lat: this.quad.centre.lat - this.quad.halfWidth/2,
                    lon: this.quad.centre.lon - this.quad.halfHeight/2
                },
                halfWidth: this.quad.halfWidth/2,
                halfHeight: this.quad.halfHeight/2,
                status: "EMPTY_LEAF",
                nwChild: null,
                neChild: null,
                seChild: null,
                swChild: null,
                id: QuadService.quadId,
                parentQuad: this.quad
            }
            QuadService.quadId++;
            return;
        }
        else if (this.quad.status === "DIVIDED_NODE") {
            
            if (loc.lat > this.quad.centre.lat && loc.lon > this.quad.centre.lon) {
                const neChild = new QuadService({
                    lat: this.quad.centre.lat + this.quad.halfWidth/2,
                    lon: this.quad.centre.lon + this.quad.halfHeight/2
                }, this.quad.halfHeight/2, this.quad.halfWidth/2, this.quad);
                neChild.insertCab(cab, loc);
            }
            else if (loc.lat < this.quad.centre.lat && loc.lon > this.quad.centre.lon) {
                const nwChild = new QuadService({
                    lat: this.quad.centre.lat - this.quad.halfWidth/2,
                    lon: this.quad.centre.lon + this.quad.halfHeight/2
                }, this.quad.halfHeight/2, this.quad.halfWidth/2, this.quad);
                nwChild.insertCab(cab, loc);
            } 
            else if (loc.lat < this.quad.centre.lat && loc.lon < this.quad.centre.lon) {
                const swChild = new QuadService({
                    lat: this.quad.centre.lat - this.quad.halfWidth/2,
                    lon: this.quad.centre.lon - this.quad.halfHeight/2
                }, this.quad.halfHeight/2, this.quad.halfWidth/2, this.quad);
                swChild.insertCab(cab, loc);
            } 
            else if (loc.lat > this.quad.centre.lat && loc.lon < this.quad.centre.lon) {
                const seChild = new QuadService({
                    lat: this.quad.centre.lat + this.quad.halfWidth/2,
                    lon: this.quad.centre.lon - this.quad.halfHeight/2
                }, this.quad.halfHeight/2, this.quad.halfWidth/2, this.quad);
                seChild.insertCab(cab, loc);
            } 
            
        }
    }

    containsLoc(loc: Location) {
        return (loc.lat <= this.quad.centre.lat + this.quad.halfWidth
            && loc.lat >= this.quad.centre.lat - this.quad.halfWidth
            && loc.lon >= this.quad.centre.lon - this.quad.halfHeight  // bottom
            && loc.lon <= this.quad.centre.lon + this.quad.halfHeight);
    }


}

