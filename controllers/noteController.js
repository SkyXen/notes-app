import Notes from "../models/Notes.js";
import asyncHandler from "express-async-handler";

/** Retriving all the created notes */
const getNotes = asyncHandler(async (req, res) => {
    const notes = await Notes.find();
    res.json(notes);
}
);

/** Retriving a specific note by it's _id */
const getNoteById = asyncHandler(async (req, res) => {
    const note = await Notes.findById(req.params.id);

    if (note) {
        res.json(note);
    } else {
        res.status(404).json({ message: "Note not found" });
    }
}
);

/** Creating a Node */
const createNote = asyncHandler(async (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        res.status(400).json({ message: "Fill all the required fields." });

        return;

    } else {
        const note = new Notes({ title, content });

        const createdNote = await note.save();

        res.status(201).json(createdNote);
    }
}
);

/** Deleting a specific note by it's _id */
const deleteNote = asyncHandler(async (req, res) => {
    const note = await Notes.findById(req.params.id);
    if (note) {
        await note.remove();
        res.json({ message: "Note Removed Successfully!" });
    } else {
        res.status(404).json({ messgae: "Note Not Found" });
    }
}
);

/** Updating a specific note by it's _id */
const updateNote = asyncHandler(async (req, res) => {
    const { title, content } = req.body;

    const note = await Notes.findById(req.params.id);
    if (note) {
        note.title = title;
        note.content = content;

        const updatedNote = await note.save();
        res.json(updatedNote);
    } else {
        res.status(404);
        throw new Error("Note Not Found");
    }
}
);

const health = asyncHandler(async (req, res) => {
    res.status(200).json({ messgae: "Note Not Found" })
}
);

export { getNoteById, getNotes, createNote, deleteNote, updateNote, health };

