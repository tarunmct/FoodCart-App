import { createContext, useState , useContext } from "react";

export const FoodCartContext = createContext();

export const CartProvider = ({children})=> {
    const [cart,setCart]=useState([]);


return(
    <FoodCartContext.Provider value={{cart,setCart}}>
        {children}
    </FoodCartContext.Provider>
);
};

export const useCart = ()=>useContext(FoodCartContext);  