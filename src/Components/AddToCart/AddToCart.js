
import { useContext } from 'react'
import { CartContext } from '../../context/Cart/cartContex'
import './AddToCart.css'
const AddToCart = () => {
    const {increamentCounter} = useContext(CartContext)
    return (
        <div>
            <button  onClick={increamentCounter}    className="btn-cart">Add To Cart</button>
        </div>
    )
}

export default AddToCart
