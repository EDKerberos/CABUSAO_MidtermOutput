import { useNavigate, useParams, Link } from "react-router-dom"

export default function Product({products}) {
  const { urlId } = useParams()

  const navigate = useNavigate()

  const product = products.find( ({ id }) => id === urlId);

  if (!product) {
    setTimeout(() => {
      navigate('/productlist');
    }, 2000)
  }

  return (
    <div>
      {!product && <p>Product not found!</p>}
      {product && (
        <div key={product.id}>
          <img src={product.image} alt={product.altimg}></img>
          <h2>{product.name}</h2>
          <p>PHP {product.price}</p>
          <p>{product.description}</p>
          <Link to={'/productlist'}>Return to Store</Link>
        </div>
      )}
    </div>
  )
}
