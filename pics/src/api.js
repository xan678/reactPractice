import axios from 'axios';

const searchImages = async (query) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers : {
            Authorization: 'Client-ID kTb11oLTJTLpVSIA40q5SKN_fWWdHs0ziFwgcuIlVVQ'
        },
        params : {
            query
        }
    });

    return response.data.results;
};

export default searchImages;


