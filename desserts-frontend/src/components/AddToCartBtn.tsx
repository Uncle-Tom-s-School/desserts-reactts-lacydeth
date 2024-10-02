import { useContext, useState } from "react";
import { DessertCardProp } from "./DessertCard";
import { CartCtx } from "../App";

const AddToCartBtn = (prop: DessertCardProp) => {
    const [quantity, setQuantity] = useState(0); 

    const cartctx = useContext(CartCtx)

    if(!cartctx) {
        throw new Error("Hiba!")
    }
    const {cart, setCart} = cartctx;

    const increase = () => {
        setQuantity(quantity + 1)
        setCart([...cart, prop])
    }
    const decrease = () => {
        setQuantity(quantity - 1)
    }
    return (
        <> {quantity === 0 ?
            <div className="add-btn" onClick={increase}>Add To Cart</div>:
            <div className="add-btn used">
                <button onClick={decrease}>-</button>
                {quantity}
                <button onClick={increase}>+</button>
            </div>
        }
        </>
    )
}

export default AddToCartBtn