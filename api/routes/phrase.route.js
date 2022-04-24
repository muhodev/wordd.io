import express from "express";
import {
  createOnePhrase,
  deleteOnePhrase,
  getAllPhrases,
  getOnePhrase,
  updateOnePhrase,
} from "../controllers/index.js";

const phraseRoutes = express.Router();

phraseRoutes.route("/").get(getAllPhrases).post(createOnePhrase);

phraseRoutes
  .route("/:id")
  .get(getOnePhrase)
  .patch(updateOnePhrase)
  .delete(deleteOnePhrase);

export { phraseRoutes };
