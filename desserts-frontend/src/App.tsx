import { useEffect, useState } from 'react'
import DessertCard, {DessertCardProp} from './components/DessertCard'
const App = () => {
  const [desserts, setDesserts] = useState<DessertCardProp[]>([]);

  useEffect(() => {
    fetch("/data.json").then(resp => resp.json()).then(apiDesserts => setDesserts(apiDesserts))
  }, []);
  return (
    <div className='dessert-grid'>
      {
        desserts.map(dessert => <DessertCard{...dessert}/>)
      }
    </div>
  )
}

export default App