import axios from "axios";

const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 20xJbD2s-pPdcEWph-N1bimW6lKkyxXdX4_bAvFZLgg'
        },
        params: {
            query: 'cars'
        }
    })
    console.log(response)
    return response
}


export default searchImages