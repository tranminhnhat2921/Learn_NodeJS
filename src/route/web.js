import express from "express";
import homeController from "../controllers/homeController.js"

let router = express.Router();

let initWebRouter = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', (req, res) => {
        res.render('index.ejs');
    });

    return app.use('/', router);
}

export default initWebRouter;