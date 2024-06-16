import { Rating } from './Rating'; 
import { Price } from './Price';
export function Card({ product, cart, addToCart, removeFromCart }) {
    const inCart = cart.some((item) => item.id === product.id);
    const handleCartAction = (product) => {
        if (!inCart) {
            addToCart(product);
        } 
        else {
            removeFromCart(product.id);
        }
    };
    return (
        <div className="col mb-5">
            <div className="card h-100">
                {/* <!-- Sale badge--> */}
                {product.sale ? <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}> Sale</div> : ""}
                {/* <!-- Product image--> */}
                <img 
                    className="card-img-top" 
                    src={product.img} 
                    alt={product.name} 
                    style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                    <div className="text-center">
                        {/* <!-- Product name--> */}
                        <h5 className="fw-bolder">{product.name}</h5>
                        {/* <!-- Product reviews--> */}
                        <Rating rating={product.rating} />
                        {/* <!-- Product price--> */}
                        <Price  price={product.price} />
                    </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <button 
                            className="btn btn-outline-dark mt-auto" 
                            onClick={() => handleCartAction(product)}
                        >
                            {inCart ? 'Remove from cart' : 'Add to cart'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}