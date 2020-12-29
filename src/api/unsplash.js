import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID 8FibsqpD0ez8M6KFoI2yDmrn2zxdiAMZeJaDtD_evgY'
    }
})

