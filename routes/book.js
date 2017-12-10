const express = require(express);
const router = express.Router();
const BookModel = require('../models/book');
router.get('/',(res,req)=>{
    BookModel.getBooks()
    .then((books)=>{
        res.render('index',{books})
    })
})

router.get('/add', (res, req) => {
    res.render('add')
})

router.post('/add',(req,res)=>{
    let book = req.body
    BookModel.addBook(book)
    .then((result)=>{
        res.redirect('/')
    })
})

router.get('/:bookId/remove', (res, req) => {
    BookModel.delBook(req.params.bookId)
    .then((book)=>{
        res.redirect('/')
    })
})

router.get('/:bookId/edit', (res, req) => {
    let book = req.body
    BookModel.getBook((req.params.bookId))
    .then((book)=>{
        res.render('edit'),{
            book,
            bookid: req.params.bookId
        }
    })
})

router.post('/:bookId/edit', (res, req) => {
    let book = req.body
    BookModel.getBook((req.params.bookId))
    .then((book)=>{
        res.redirect('/')
    })
})

module.exports = router;