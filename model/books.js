import { model, Schema } from "mongoose";


const booksSchema = new Schema({
    title:String,
    author_id:Schema.Types.ObjectId,
    genre:String
});

export const Books = model("books", booksSchema);