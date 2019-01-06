const express = require('express');
const app = express();
const parser = require('body-parser');
const path = require('path');
const PORT = 9005;

app.use(parser.json());
app.use(parser.urlencoded({
    extended: true
}));
app.use(express.static(path.join(__dirname, '../public')));
app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("His Power Level...Its Over...", PORT)
    }
})

module.exports = app;