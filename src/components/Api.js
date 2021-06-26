import axios from 'axios';

const baseUrl = "https://www.flickr.com/services/rest";

const apiKey = "e5a7f1704a0ef1802ce9fbed3771fadd";
const format = "json";
const getPhotos = "flickr.photos.getRecent";
const searchPhotos = "flickr.photos.search";


async function GetRecentPhotos(page) {
    const response = await axios.get(`${baseUrl}/?method=${getPhotos}&api_key=${apiKey}&page=${page}&format=${format}&nojsoncallback=1`);
    return response.data.photos;
}


async function SearchQuery(query, page) {
    const response = await axios.get(`${baseUrl}/?method=${searchPhotos}&api_key=${apiKey}&page=${page}&tags=${query}&text=${query}&format=json&nojsoncallback=1`);
    return response.data.photos;
}

export { GetRecentPhotos, SearchQuery };