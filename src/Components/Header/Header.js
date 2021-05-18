import { useContext } from 'react'
import { CartContext } from '../../context/Cart/cartContex'
import './Header.css'

const Header = () => {
    const {counter} = useContext(CartContext)
 
    return (
        <header>
            <div className="cart-list-no">{counter}</div>
            <img src="https://i.pinimg.com/originals/15/4f/df/154fdf2f2759676a96e9aed653082276.png" alt="cart" />
        </header>
    )
}

export default Header
