import express from "express";
import { create as createHandlebarsEngine } from "express-handlebars";
import { CarouselRepo } from "./db/carousel.js";
import { FeatureRepo } from "./db/feature.js";

const app = express();

const handlebarsEngine = createHandlebarsEngine({
  extname: "handlebars", //duoi tat ca file la .handlebars
  defaultLayout: "main",
  layoutsDir: "views/layouts",
  partialsDir: "views/partials",
  helpers: {
    eq: (left, right)=>{
      return left === right;
    },
    sum2num: (num1, num2, option)=>{
        var sum = num1 + num2;
        return option.fn(sum);
    }
  }
});

//khai bao engine handlebars
app.engine("handlebars", handlebarsEngine.engine);
//su dung handlebar
app.set("view engine", "handlebars");
//cau hinh folder handlebar
app.set("views", "views/pages");

app.use(express.static("public"));

app.get("/", (req, res) => {
    const carouselItems = CarouselRepo.getItem();
    const featureItem = FeatureRepo.getItem();
    const catagories = [
      {
        id:"#tab-1",
        name: "All Products",
        product: [
          {
          id: "1",
          name: "Grapes",
          image:"img/fruite-item-5.jpg",
          desc:"Lorem ipsum",
          price: 4.99
          },
          {
            id: "2",
            name: "Raspberries",
            image:"img/fruite-item-2.jpg",
            desc:"Lorem ipsum",
            price: 4.99
            }       
        ]
      },
      {
        id:"#tab-2",
        name: "Vegetables",
        product: [
          {
            id: "1",
            name: "Grapes",
            image:"img/fruite-item-5.jpg",
            desc:"Lorem ipsum",
            price: 4.99
            },
            {
              id: "2",
              name: "Raspberries",
              image:"img/fruite-item-2.jpg",
              desc:"Lorem ipsum",
              price: 4.99
              }  
        ]
      }
    ] 
    // console.log(carouselItems);
  res.render("homepage", {
    carouselItems,
    featureItem,
    catagories
  });
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/chackout", (req, res) => {
  res.render("checkout");
});

app.get("/cart", (req, res) => {
  res.render("cart");
});

app.get("/shop-detail", (req, res) => {
  res.render("shop-detail");
});

app.get("/shop", (req, res) => {
  res.render("shop");
});

app.get("/404", (req, res) => {
    res.render("404");
  });

app.listen(3000, () => {
  console.log("app is running on port 3000");
});
