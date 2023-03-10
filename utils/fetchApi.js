import  axios  from "axios";


export const baseUrl="https://bayut.p.rapidapi.com";


export const fetchApi = async (url) => {
    const {data} = await axios.get(url, {
      headers: {
        "X-RapidAPI-Key": "1b4f5c382amsh547156e0847be8ap133d13jsn4dd37577667c",
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    });
    return data;
}