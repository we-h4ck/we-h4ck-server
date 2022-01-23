const findMyLocation = () => {
     
    const status = document.querySelector('.status');

    const success = (position) => {
        console.log(position)
    }

    const error = () => {
        status.textContent = 'Cant retrieve location';
    }
    
    navigator.geolocation.getCurrentPosition(success, error);
}

document.querySelector('.find-location').addEventListener('click', findMyLocation);