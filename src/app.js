import express from "express";
import {create as createHandlebarsEngine} from "express-handlebars";

const app = express();

const handlebarsEngine = createHandlebarsEngine({
    defaultLayout: "main",
    layoutsDir: "views/layouts",
    partialsDir: "views/partials"
});

//khai bao engine handlebars
app.engine('handlebars', handlebarsEngine.engine);
//su dung handlebar
app.set('view engine', 'handlebars');
//cau hinh folder handlebar
app.set('views', 'views/pages');

app.use(express.static("public"));



app.get("/", (req, res)=>{
    res.render("homepage");
});


app.listen(3000, ()=> {
    console.log("app is running on port 3000");
});