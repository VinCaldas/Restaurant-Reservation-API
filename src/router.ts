import { Router, Request, Response  } from "express";
import { reserve } from "./app/modules/Reserve/controller/ReserveController";
import { table } from "./app/modules/Table/controller/TableController";
import { date } from "./app/modules/Date/controller/DateController";
import cors from "cors";

const router: Router = Router()

router.options('*', cors())

router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'hello world front-end' })
})

// Reserve Routes
router.post("/reserve", reserve.create);
router.get("/reserve", cors(), reserve.getAll);
router.get("/reserve/:id", reserve.getById);
router.delete("/reserve/:id", reserve.delete);

// Table Routes
router.post("/table", table.create);
router.get("/table", table.get);

// Date Routes
router.post("/date", date.create);
router.get("/date", cors(), date.get);
router.get("/date/:date", date.getByDate);
router.patch("/date/:date/:num_table", date.update);

export { router };