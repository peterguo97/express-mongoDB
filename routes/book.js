const express = require('express');
const router = express.Router();
const BookModel = require('../models/book');
router.get('/',(req,res)=>{
    BookModel.getBooks()
    .then((books)=>{
        res.render('index',{books})
    })
    .catch( err => console.log(err))
})

router.get('/add', (req, res) => {
    res.render('add')
})

router.post('/add',(req,res)=>{
    let book = req.body
    BookModel.addBook(book)
    .then(()=>{
        res.redirect('/')
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.get('/:bookId/remove', (req, res) => {
    BookModel.delBook(req.params.bookId)
    .then((book)=>{
        res.redirect('/')
    })
    .catch(err => console.log(err))
})

router.get('/:bookId/edit', (req, res) => {
    let book = req.body
    BookModel.getBook((req.params.bookId))
    .then((book)=>{
        res.render('edit',{
            book,
            bookid: req.params.bookId
        })
    })
    .catch(err => console.log(err))
})

router.post('/:bookId/edit', (req, res) => {
    let book = req.body
    BookModel.getBook((req.params.bookId))
    .then((book)=>{
        res.redirect('/')
    })
    .catch(err => console.log(err))
})

module.exports = router;