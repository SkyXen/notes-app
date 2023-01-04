import express from "express";
import {
  getNoteById,
  getNotes,
  createNote,
  deleteNote,
  updateNote,
  health,
} from "../controllers/noteController.js";


const router = express.Router();

/** ROUTE FOR CREATING NOTE */
router.route("/create").post(createNote);

/** ROUTE FOR RETRIVING ALL NOTES */
router.route("/").get(getNotes);

/** ROUTES FOR RETRIVING, DELETING, UPDATING specific Notes by _id */
router.route("/:id")
  .get(getNoteById)
  .delete(deleteNote)
  .put(updateNote);

router.route("/health").get(health);

export default router;
