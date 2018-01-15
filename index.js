const exppress = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// CUSTOM MODULES
const keys = require('./config/keys');
console.log(keys.mongoURI);
// DB CONNECTION
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = exppress();

// EXPRESS MIDDLEWARES app.use()
app.use(bodyParser.json());

// ----- ROUTES


// MAKE REACT WORK IN DEPLOYMENT
if(process.env.NODE_ENV === 'production') {
    // Express will serve production assets (main.js main.css etc)
    // This says that if any GET request comes in for something and is not understood what is looking for, look for it at client/build
    app.use(exppress.static('client/build'));

    // Express will serve index.html if the route is not recognized (not even in the client/build dir)
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server up and ready to go!");
});