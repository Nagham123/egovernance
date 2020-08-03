const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();


//book model 
const Book = require('../../models/Book');



//@route GET api/books
//@description Get all Books
//@access Public
router.get('/', (req, res) => {
    Book.find()
    // .sort({ date: -1 })
    .then(books => res.json(books))
});
 


//@route POST api/books
//@description Create a POST
//@access Public because we don't have authentication 
router.post('/', (req, res) => {
    const newBook = new Book({
        title: req.body.title
    });

    newBook.save().then(book => res.json(book));
});






//@route Delete api/books/:id
//@description Delete a book
//@access Public because we don't have authentication 
router.delete('/:id', (req, res) => {
    Book.findById(req.params.id)
    .then(book => book.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
  });

module.exports = router;    