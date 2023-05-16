import { Food } from "./Models/Food";

export class Store{
    id!:number;
    title!:string;
    stars:number = 0;
    img_id!:string;
    Tags?:String[];
}