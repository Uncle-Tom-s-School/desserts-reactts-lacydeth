type DessertCardProp = {
    name: string;
}

const DessertCard = (prop: DessertCardProp) => {
  return (
    <div>
        {prop.name}
    </div>
    
  )
}

export default DessertCard