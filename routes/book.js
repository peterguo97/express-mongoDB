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

})

router.get('/:bookId/remove', (res, req) => {

})

router.get('/:bookId/edit', (res, req) => {

})

router.post('/:bookId/edit', (res, req) => {

})

module.exports = router;