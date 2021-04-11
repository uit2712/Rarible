import { ECategoryType } from "../enums/collectible-enums";

export interface ICategoryItem {
    name: string;
    type: ECategoryType;
    total: number;
}