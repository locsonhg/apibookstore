const {Book, Author} = require("../model/model");

const bookController = {
    // thee sach
    addBook: async(req, res) => {
        try{
            const newbook = new Book(req.body)
            const saveBook = await newbook.save();
            if(req.body.tacgia){
                const author = Author.findById(req.body.tacgia);
              await  author.updateOne({$push: {sach: saveBook._id}})
            }
            res.status(200).json(saveBook)
        }catch(err)
        {
            res.status(500).json(err)
        }
    },
    // danh sach
    listBook: async(req, res) => {
        try{
            const listBook = await Book.find()
            res.status(200).json(listBook)
        }catch(err){
            res.status(500).json(err)
        }
    },
    // hien thi chi tiet 1 quyen sach
    getAnBook: async(req, res) => {
        try {
            const anBook = await Book.findById(req.params.id).populate("tacgia")
            res.status(200).json(anBook)
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // sua thong tin 1 quyen sach
    updateBook : async (req, res) => {
        try {
            const update = await Book.findById(req.params.id)
            await update.updateOne({$set: req.body})
            res.status(200).json("update succsess")
        } catch (err) {
            res.status(500).json(err)
        }
    },
    // xoa sach
    deleteBook: async (req, res) => {
        try{
            await Author.updateMany(
                {sach: req.params.id},
                {$pull: {sach: req.params.id}}
            )
            await Book.findByIdAndDelete(req.params.id)
            res.status(200).json("delete succsess")
        }catch(err)
        {
            res.status(500).json(err)
        }
    }
}

module.exports = bookController;