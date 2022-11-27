import {Link} from 'react-router-dom'
import storeItems from "../data/items.json"
import Item from './Item'
function Store() {
  return (
    <div>
      <h1> Store </h1>
      <div className="container text-center">
  <div className="row  gap-2">

        {
          storeItems.map((i, index)=>{
            return(
            <div className='col' key={index}>
 <Item {...i} />
            </div>
          )})
        }
        
      
    </div></div></div>
      
   
  )
}

export default Store
