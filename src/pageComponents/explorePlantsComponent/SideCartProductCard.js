import { GoDash } from "react-icons/go";


export default function SideCartProductCard({ product, removeFromList }) {
    function remove() {
        removeFromList(product);
    }
    return (
        <div className='sidecart-product-card'>
            <img src={product.image} />
            <button className="removeFromCart" onClick={remove}><GoDash /></button>
            <div className="plant-name">
                {product.name}
            </div>
        </div>
    )
}