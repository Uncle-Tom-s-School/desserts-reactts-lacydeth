import { useContext, useEffect, useState } from "react"
import CartItem from "./CartItem"
import { CartCtx } from "../App"

export type CartItemType = {
    item: {
        name: string,
        price: number
    },
    quantity: number
}

const Cart = () => {

    const [visableCart, setVisableCart] = useState<CartItemType[]>([])

    const cartctx = useContext(CartCtx)
    
    if(!cartctx) {
        throw new Error("Hiba!")
    }
    const {cart} = cartctx;

    useEffect(() => {
        let li:CartItemType[] = []
        cart.forEach(cartItem => {li.push({
            item: {name:cartItem.name, price: cartItem.price},
            quantity: 1
        })})
        setVisableCart(li)
    },[cartctx])

    return (
        <div>
            <h2>Your Cart ({visableCart.length})</h2>
            {visableCart.map(cart => <CartItem {...cart}/>)}
        </div>
    )
}

export default Cart