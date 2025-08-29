import { Router } from "express";
import JobController from "../controller/JobController";

const jobRouter: Router = Router();

jobRouter.get("/", (request, response) => {
  const controller: JobController = new JobController(request, response);
  controller.displayJobs();
});

jobRouter.get("/edit/:id", (request, response) => {
  const controller: JobController = new JobController(request, response);
  controller.displayEditJob();
});

jobRouter.post("/edit/:id", (request, response) => {
  const controller: JobController = new JobController(request, response);
  controller.editJob();
});

jobRouter.get("/add", (request, response) => {
  const controller: JobController = new JobController(request, response);
  controller.displayAddJob();
});

jobRouter.post("/", (request, response) => {
  const controller: JobController = new JobController(request, response);
  controller.addJob();
});

jobRouter.get("/delete/:id", (request, response) => {
  const controller: JobController = new JobController(request, response);
  controller.displayDeleteJob();
});

jobRouter.post("/delete/:id", (request, response) => {
  const controller: JobController = new JobController(request, response);
  controller.deleteJob();
});

jobRouter.get("/:id", (request, response) => {
  const controller: JobController = new JobController(request, response);
  controller.displayJob();
});

export default jobRouter;
