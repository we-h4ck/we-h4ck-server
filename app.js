const express = require('express');
const Datastore = require('nedb');

const app = express();
app.listen(5000, 'localhost', ()=> console.log('listening on 5000'))
app.use(express.static('public'))
app.use(express.json({limit: '1mb'}));

const database = new Datastore('database.db');
database.loadDatabase();


app.get('/api/get-crime',(req,res)=>{
    database.find({}, (err,data)=>{
        if(err){
            res.end();
            return
        }
        res.json(data);
    })
} );


app.post('/api/crime', (req, res) => {
    
    const data = req.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    res.json(data);
    // res.json({
    //     status: 'success',
    //     // type: int,
    //     // description: string,
    //     date: timestamp,
    //     latitude: data.lat,
    //     longitude: data.lng
    
    // })
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