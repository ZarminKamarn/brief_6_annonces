import { Router } from "express";
import globalRouter from "./globalRouter";
import jobRouter from "./jobRouter";

const router: Router = Router();

router.use("/", globalRouter);

router.use("/jobs", jobRouter);

export default router;