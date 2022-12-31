import mongoose from "mongoose";

/** DATABASE SCHEMA FOR NOTES */
const noteSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        content: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Notes = mongoose.model("Notes", noteSchema);

export default Notes;