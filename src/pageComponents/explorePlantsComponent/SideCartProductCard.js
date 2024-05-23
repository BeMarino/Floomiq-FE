import { MdOutlineClose } from "react-icons/md";


export default function SideCartProductCard({ product, removeFromList }) {
    function remove() {
        removeFromList(product);
    }
    
    let imageUrl ;
    if(product.immagini[0] === ""){
        imageUrl = imageUrl = "url(empty_plant.jpeg)";
    }else{
        imageUrl = "url(" + product.immagini[0] + ")";
    }

    return (
        <div className="sideCart-element">
            <div style={{ "backgroundImage": imageUrl }} className='sidecart-product-card'>

                <div className="plant-name truncate" title={product.nome}>
                    {product.nome}
                </div>
            </div>
            <button className="removeFromCart" onClick={remove}><MdOutlineClose /></button>
        </div>
    )
}