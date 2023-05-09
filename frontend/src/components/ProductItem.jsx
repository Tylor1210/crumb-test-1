function ProductItem({ product }) {
  console.log(product);
  return (
    <div key={product._id} className='product'>
        <h2>{product.text}</h2>
    </div>
  )
}

export default ProductItem