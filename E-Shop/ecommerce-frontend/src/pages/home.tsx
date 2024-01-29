import { Link } from 'react-router-dom'
import ProductCard from '../components/product-card'

const Home = () => {

  const addToCartHandler = () => {

  }
  return (
    <div className='home'>
      <section>
      </section>

      <h1>Latest Products
        <Link to="/search" className="findMore">More</Link>
      </h1>

      <main>
        <ProductCard
         productId='abcdef'
         name='Macbook'
         price={159999}
         stock={15}
         handler={addToCartHandler}
         photo='https://m.media-amazon.com/images/I/71jG+e7roXL._SX569_.jpg'
          />
      </main>
    </div>
  )
}

export default Home