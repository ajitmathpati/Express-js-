import express from "express"
import { PORT } from "./env.js";
import path from "path"

const App = express();


App.get("/", (req, res) => {
    res.send("<h1> This is our UrlShortner Project <h1/> ");
})

App.use((req,res,next)=>{
   return  res.status(404).sendFile(path.join(import.meta.dirname,"views","404.html"));
})

App.listen(PORT, () => {
console.log(`The Sever Is running At PORT Number ${PORT}`);

})