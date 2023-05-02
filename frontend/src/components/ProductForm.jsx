import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {createProduct} from '../features/products/productSlice'


function ProductForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()


  const onSubmit = e => {
    e.preventDefault()
    dispatch(createProduct({text}))
    setText('')
  }


  return (
    <section className="form">
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="text">Product Name:</label>
        <input 
        type="text" 
        name='text' 
        id='text' 
        value={text} 
        onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-block" type='submit'>Add Product</button>
      </div>
    </form>
    </section>
  )
}

export default ProductForm