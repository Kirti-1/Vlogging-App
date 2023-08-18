import {API_URLS, LOCAL_STORAGE_TOKEN_KEY} from '../utils/constant' 

const customFetch = async (url, {body, ...customConfiguration}) => {

    const token = window.localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);



    const headers = {
        'content-type': 'application/x-www-form-urlencoded',
    };

    if(token){
        headers.Authourization = `Bearer ${token}`
    }


    const config =
    {
        ...customConfiguration,
        header:{
            headers,
            ...customConfiguration.headers
        }
    }

    


    try{
        const response = await fetch(url, config)
        const data = await response.json();

        if(data.success){
            return {
                data: data.data,
                success: true
            };
        }

        throw new Error(data.message); 
    }catch(error){
        console.error('error');
        return{
            message: error.message,
            success: false
        };

    }
}

export const getPosts = (pages=1, limit=5) => {
    return customFetch(API_URLS.posts(pages, limit),{
        method: 'GET'
    })
}