const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');


const books = require('./routes/api/books');

const app = express();

//bodyparser middleware
app.use(bodyParser.json());
app.use(cors());


//mongoDB URI
const db = require('./config/keys').mongoURl;

// mongoose.connect(db, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then(() => console.log('mongoDB connected ...'))
//     .catch(err => console.log(err)); 

    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.log('mongoDB connected ...'))
        .catch(err => console.log(err)); 


// mongoose.connect('mongodb://localhost/mern2', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });



//use routes 
app.use('/api/books', books);

//serve our static assets if in production 
if(process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));