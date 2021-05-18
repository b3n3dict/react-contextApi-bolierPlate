import {createContext, useState} from 'react';




export const CartContext = createContext();

const Cart = ({children})=>{
   const [counter, setCounter] = useState(0);

 const increamentCounter = ()=>{
       setCounter((count)=>count+1)
   }

   return <CartContext.Provider value={{counter,increamentCounter}}>
          {children}
   </CartContext.Provider>

}

export default Cart