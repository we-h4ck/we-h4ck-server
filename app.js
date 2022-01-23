const express = require('express');
const app = express();
const Datastore = require('nedb');

app.listen(5000, 'localhost', ()=> console.log('listening on 3000'))
app.use(express.static('public'))
app.use(express.json({limit: '1mb'}));

const database = new Datastore('database.db');
database.loadDatabase();

app.post('/api/crime', (req, res) => {
    console.log('I got a request')
    // console.log(req.body)
    
    const data = req.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    res.json({
        status: 'success',
        // type: int,
        // description: string,
        date: timestamp,
        latitude: data.lat,
        longitude: data.lng
    
    })
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