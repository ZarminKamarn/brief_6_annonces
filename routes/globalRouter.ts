import { request, response, Router } from "express";
import GlobalController from "../controller/GlobalController";

const globalRouter: Router = Router();

globalRouter.get("/", (request, response) => {
    const controller: GlobalController = new GlobalController(request, response);
    controller.homepage();
});

export default globalRouter;