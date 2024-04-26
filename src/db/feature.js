export class FeatureRepo {
    static _item = [
        {
            id: "1",
            subtitle : "Free on order over $300", 
            title: "Free Shipping",
            icon: `<i class="fas fa-car-side fa-3x text-white"></i>`
        },
        {
            id: "2",
            subtitle : "100% security payment",
            title: "Security Payment",
            icon: `<i class="fas fa-user-shield fa-3x text-white"></i>`
        },
        {
            id: "2",
            subtitle : "30 day money guarantee",
            title: "30 Day Return",
            icon: `<i class="fas fa-exchange-alt fa-3x text-white"></i>`
        },
        {
            id: "2",
            subtitle : "Support every time fast",
            title: "24/7 Support",
            icon: `<i class="fa fa-phone-alt fa-3x text-white"></i>`
        }
    ];

    static getItem(){
        return this._item;
    }
}