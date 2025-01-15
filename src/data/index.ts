import { DataBundle } from "character-journey-map/models";
import { INHERITANCE_CYCLE_DATA } from "./inheritance_cycle";

export enum AvailableSeries {
    inheritance_cycle = 'inheritance_cylce'
}

export const DATA: { [key in AvailableSeries]: DataBundle; } = {
    inheritance_cylce: INHERITANCE_CYCLE_DATA
}