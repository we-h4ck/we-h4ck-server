const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("<h1>We are We-h4ck</h1>")
})


app.listen(5000, () => {console.log("App is running on port 5000")});