const express = require('express');
const app = express();

app.listen(3000, ()=> console.log('listening on 3000'))
app.use(express.static('public'))

app.use(express.json({limit: '1mb'}));

app.post('/api', (req, res) => {
    console.log('I got a request')
    console.log(req.body)
} )





























// const findMyLocation = () => {
     
//     const status = document.querySelector('.status');

//     const success = (position) => {
//         console.log(position)
        

//     }

//     const error = () => {
//         status.textContent = 'Cant retrieve location';
//     }

//     navigator.geolocation.getCurrentPosition(success, error);

 

// }

// document.querySelector('.find-location').addEventListener('click', findMyLocation);