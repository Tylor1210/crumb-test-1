import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import productService from '../products/productService'

const initialState = {
    products: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Create new Product
export const createProduct = createAsyncThunk('product/create', async (productData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await productService.createProduct(productData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
         || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get user products
export const getProducts = createAsyncThunk('product/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await productService.getProducts(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message)
         || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export  const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                if (Array.isArray(state.products)) {
                    state.products.push(action.payload)
                }
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message(action.payload)
            })
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                if (Array.isArray(state.products)) {
                    state.products.push(action.payload)
                }
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message(action.payload)
            })
    }
})

export const {reset} = productSlice.actions
export default productSlice.reducer