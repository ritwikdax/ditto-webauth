import { Router } from "express";
import { authorizeHandler } from "../handler/authorize.handler";
import { validateSchema } from "../middleware/schemaValidator.middleware";
import { bodySchema } from "../schema/body.schema";

const authRouter = Router();

authRouter.post("/", validateSchema(bodySchema),authorizeHandler);

export { authRouter };
