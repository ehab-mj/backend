import express from "express";
import {
  createGameController,
  deleteGameController,
  getAllGamesController,
  getGameByIdController,
  getMyGamesController,
  patchBizNumberController,
  patchLikeController,
  updateGameController,
} from "../../controllers/Games.controller.js";
import objectIdParamsValidationMiddleware from "../../middlewares/objectIdParamsValidation.mw.js";
import authMiddleware from "../../middlewares/auth.mw.js";
import isBizMiddleware from "../../middlewares/isBiz.mw.js";
import bodyValidationMiddleware from "../../middlewares/bodyValidation.mw.js";
import { createGameValidation, patchBizGameValidation } from "../../validation/validationAdapter.js";
import adminOrBizMiddleware from "../../middlewares/adminOrBiz.mw.js";
import isAdminMiddleware from "../../middlewares/isAdmin.mw.js";
const router = express.Router();

//http://localhost:3030/api/games
router.get("/", getAllGamesController);

router.get("/my-games", authMiddleware, getMyGamesController);

router.get("/:id", objectIdParamsValidationMiddleware, getGameByIdController);

router.post(
  "/",
  authMiddleware,
  isBizMiddleware,
  bodyValidationMiddleware(createGameValidation),
  createGameController
);

router.put(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  adminOrBizMiddleware,
  bodyValidationMiddleware(createGameValidation),
  updateGameController
);


router.patch(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  patchLikeController
);


router.patch(
  "/biz-number/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  bodyValidationMiddleware(patchBizGameValidation),
  isAdminMiddleware,
  patchBizNumberController
);


router.delete(
  "/:id",
  authMiddleware,
  objectIdParamsValidationMiddleware,
  adminOrBizMiddleware,
  deleteGameController
);

export default router;
