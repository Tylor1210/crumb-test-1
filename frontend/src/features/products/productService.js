import axios from "axios";

const API_URL = '/api/products/'

//Create new product
const createProduct = async (productData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, productData, config)

    return response.data
}

const productService = {
    createProduct
}

export default productService