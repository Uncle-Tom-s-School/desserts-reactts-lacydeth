import AddToCartBtn from "./AddToCartBtn";

export type DessertCardProp = {
    name: string,
    category: string,
    price: number,
    image: {
      thumbnail: string,
      mobile: string,
      tablet: string,
      desktop: string
    }
}

const DessertCard = (prop: DessertCardProp) => {
  return (
    <div className="dessert-card">
        <img src={prop.image.desktop}/>
        <AddToCartBtn/>
        <h4>{prop.category}</h4>
        <h2>{prop.name}</h2>
        <h3>${prop.price}</h3>
    </div>
    
  )
}

export default DessertCard