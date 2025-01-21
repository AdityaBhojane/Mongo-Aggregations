import { model, Schema } from "mongoose";


const authorSchema = new Schema({
    name:String,
    birth_year:Number
});

export const Author = model('authors', authorSchema);