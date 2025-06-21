import { Link } from 'react-router-dom'

import './ProductList.css'

export default function ProductList({products}) {

  return (
    <div className="list">     
        {products && products.map(product => (
        <div key={product.id} className="card">
            <img src={product.image} alt={product.altimg}></img>
            <h3>{product.name}</h3>
            <p>PHP {product.price}</p>
            <Link to={`/products/${product.id}`}>View Details</Link>
        </div>
        ))}
    </div>
  )
}