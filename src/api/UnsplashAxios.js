import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
 headers: {   
        Authorization:
        'Client-ID f09fbad8663695129cb878f7cb1507d2cc4b1107e622457445631ac7c1a9d9e6'
        } 
})
