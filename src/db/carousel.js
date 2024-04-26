export class CarouselRepo {
    static _item = [
        {
            id: "1",
            url : "img/hero-img-1.png", 
            title: "Fruites"
        },
        {
            id: "2",
            url : "img/hero-img-2.jpg",
            title: "Vesitables"
        },
        {
            id: "2",
            url : "img/hero-img-1.png",
            title: "C3"
        },
        {
            id: "2",
            url : "img/hero-img-2.jpg",
            title: "C4"
        }
    ];

    static getItem(){
        return this._item;
    }
}