import { Card } from './Card';
import products from '../data/items.json';

export function Products({ cart, addToCart, removeFromCart }) {
  return (
    <section>
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {products.map(product => (
                <Card
                    key={product.id}
                    product={product}
                    cart={cart}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
                ))}
            </div>
        </div>
    </section>
    
  );
}
