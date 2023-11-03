import axios from "axios"
 
export const getItems = async () => {
    const url = `https://fakestoreapi.com/products`;
   return await axios.get(url)
}
