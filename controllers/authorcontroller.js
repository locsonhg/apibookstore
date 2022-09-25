const {Book, Author} = require("../model/model");

const authorController = {
    // them tac gia
    addauthor: async (req, res) => {
        try{
            const newAuthor = new Author(req.body);
            const saveAuthor = await newAuthor.save();
            res.status(200).json(saveAuthor)
        }catch(err){
            res.status(500).json(err)
        }
    },
    // danh sach tac gia
    allAuthor : async (req, res) => {
        try{
            const listAuthor = await Author.find()
            res.status(200).json(listAuthor)
        }catch(err){
            res.status(500).json(err)
        }
    },
    // chi tiet 1 tac gia
    getAnAuthor : async (req, res) => {
        try{
            const author = await Author.findById(req.params.id).populate("sach")
            res.status(200).json(author)
        }catch(err){
            res.status(500).json(err)
        }
    },
    // sua thong tin 1 tac gia
    updateAuthor: async (req, res) => {
        try {
            const update = Author.findById(req.params.id)
            await update.updateOne({$set: req.body})
            res.status(200).json("update succsess")
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // xoa tac gia
    deleteAuthor: async (req, res) => {
        try {
            await Book.updateMany({tacgia: req.params.id}, {tacgia: null})
            await Author.findByIdAndDelete(req.params.id)
            res.status(200).json("delete succsess")
        } catch (err) {
            res.status(500).json(err)
        }
    }
}


module.exports = authorController;