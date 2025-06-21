import { Link } from 'react-router-dom'

// styles
 import './ProductList.css'

export default function Home() {

  return (
    <div className="list">
      <h2>Welcome, Dearest Customer!</h2>
      <p>Welcome to the super awesome steak store : 3</p>
      <Link to={'/productlist'}>View Items</Link>
    </div>
  )
}
