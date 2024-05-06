import {join} from "path";
import { readJsonFile } from "../../utils/read-json-file.util.js";
import {CarouselModel} from "./model/carousel.model.js"

export class CarouselRepo {
    // static _dataFilePath = join(process.cwd(), "./src/db/carousel.json"); 
    // static getItem(){
    //     return readJsonFile(this._dataFilePath);
    // }
    static async getItem(){
        const items = await CarouselModel.find({});
        // console.log(items.map(item =>{
        //     item.title
        // }));
        return items;
    }

    // static async createItem(){
    //     const item = new CarouselModel({});
    // }
}