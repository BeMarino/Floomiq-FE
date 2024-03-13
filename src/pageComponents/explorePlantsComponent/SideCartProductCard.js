import { MdOutlineClose } from "react-icons/md";


export default function SideCartProductCard({ product, removeFromList }) {
    function remove() {
        removeFromList(product);
    }
    let imageUrl = "url(" + product.image + ")";

    return (
        <div className="sideCart-element">
            <div style={{ "background-image": imageUrl }} className='sidecart-product-card'>

                <div className="plant-name">
                    {product.name}
                </div>
            </div>
            <button className="removeFromCart" onClick={remove}><MdOutlineClose /></button>
        </div>
    )
}