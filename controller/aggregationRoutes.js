import router from 'express';
import { Books } from '../model/books.js';
import { Author } from '../model/author.js';
import { User } from '../model/user.js';

export const aggregationRoutes = router();

aggregationRoutes.get("/1", async (req, res) => {
    try {
        const books = await Books.find({})
        res.json(books);
    } catch (error) {
        console.log(error)
    }
});

aggregationRoutes.get("/2", async (req, res) => {
    try {
        const authors = await Author.find({})
        res.json(authors);
    } catch (error) {
        console.log(error)
    }
});
aggregationRoutes.post("/2", async (req, res) => {
    try {
        const authors = await Author.create({
            name:"sachin",
            birth_year:1976
        })
        res.json(authors);
    } catch (error) {
        console.log(error)
    }
});
aggregationRoutes.get("/u", async (req, res) => {
    try {
        const authors = await User.find()

        res.json(authors);
    } catch (error) {
        console.log(error)
    }
});

aggregationRoutes.get('/3',async(req, res)=>{
    try {
        const authors = await Author.aggregate([
            {
                $lookup: {
                  from: 'authors',
                  localField: 'authors',
                  foreignField: 'books',
                  as: 'abc'
                }
            }
            ])
        res.json(authors);
    } catch (error) {
        console.log(error)
    }
})

