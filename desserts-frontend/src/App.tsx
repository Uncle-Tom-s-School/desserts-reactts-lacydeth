import { useEffect, useState } from 'react'
import DessertCard, {DessertCardProp} from './components/DessertCard'
import Cart from './components/Cart';
const App = () => {
  const [desserts, setDesserts] = useState<DessertCardProp[]>([]);

  useEffect(() => {
    fetch("/data.json").
    then(resp => resp.json()).
    then(apiDesserts => setDesserts(apiDesserts))
  }, []);
  return (
    <section className='home'>
      <div>
        <h1>Desserts</h1>
        <div className='dessert-grid'>
          {
            desserts.map(dessert => <DessertCard{...dessert}/>)
          }
        </div>
      </div>
      <Cart></Cart>
    </section>
  )
}

export default App