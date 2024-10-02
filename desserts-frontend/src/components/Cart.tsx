import { useEffect, useState } from "react"
import CartItem from "./CartItem"

export type CartItemType = {
    item: {
        name: string,
        price: number
    },
    quantity: number
}

const Cart = () => {

    const [cart, setCart] = useState<CartItemType[]>([])

    useEffect(() => {
        setCart([
            {item: {
                name: "Piskóta",
                price:5
            },  quantity: 10}
        ])
    })

    return (
        <div>
            <h2>Your Cart ({cart.length})</h2>
            {cart.map(cart => <CartItem {...cart}/>)}
        </div>
    )
}

export default Cart