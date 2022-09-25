const mongoose = require('mongoose')

// api tac gia
const authorSchema = new mongoose.Schema({
    ten: {
        type: String,
       
    },
    namsinh: {
        type: Number,
       
    },
    sach: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        }
    ]
})

// chỗ này là api của sách
const bookSchema= new mongoose.Schema({
    ten: {
        type: String,
        required: true
    },
    nsb: {
        type: String,
        required: true
    },
    theloai: {
        type: [String],
        required: true
    },
    tacgia: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    }
})

let Book = mongoose.model("Book", bookSchema);
let Author = mongoose.model("Author", authorSchema);

module.exports = {Book, Author}