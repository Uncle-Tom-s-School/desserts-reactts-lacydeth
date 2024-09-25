import AddToCartBtn from "./AddToCartBtn";

type DessertCardProp = {
    name: string;
}

const DessertCard = (prop: DessertCardProp) => {
  return (
    <div>
        {prop.name}
        <AddToCartBtn/>
    </div>
    
  )
}

export default DessertCard