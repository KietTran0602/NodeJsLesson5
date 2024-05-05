import {join} from "path";
import { readJsonFile } from "../../utils/read-json-file.util.js";

export class CarouselRepo {
    static _dataFilePath = join(process.cwd(), "./src/db/carousel.json"); 



    static getItem(){
        return readJsonFile(this._dataFilePath);
    }
}