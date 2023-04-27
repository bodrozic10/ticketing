import express from "express";
import { currentUser } from "../middlewares/current-user";

const router = express.Router();

router.get("/api/users/currentUser", currentUser, (req, res) => {
  console.log(`in current user route ${req.currentUser}`);
  return res.send({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
