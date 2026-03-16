import express from "express"
import { meta } from "zod/v4/core";
import path from "path";
import router from "./routes/normalroutes.js";
import {Contact}from "./routes/new.js";
import { appendFile } from "fs";
const App = express();

const PORT = 4000;

App.use(router);

App.use(Contact);
App.use((req, res) => {
    res.status(404).sendFile(path.join(import.meta.dirname, "views", "404.html"));

})


App.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);


})