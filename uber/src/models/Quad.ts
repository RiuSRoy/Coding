import { BaseModel } from "./BaseModel";
import { Cab } from "./Cab";
import { Driver } from "./Driver";
import { Location } from "./Trip";

export interface Quad extends BaseModel{
    centre: Location
    halfWidth: number;
    halfHeight: number;
    status: QUAD_STATUS;
    cab?: Cab
    nwChild: Quad | null;
    neChild: Quad | null;
    seChild: Quad | null;
    swChild: Quad | null;
    parentQuad: Quad | null
}





type QUAD_STATUS = "DIVIDED_NODE" | "FILLED_LEAF" | "EMPTY_LEAF"