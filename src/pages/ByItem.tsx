import { useParams } from "react-router-dom"
import storeItems from "../data/items.json"

const ByItem = () => {
    const {name}= useParams()
    console.log(name)
  return (
    <div>
       {
          storeItems.map((i, index)=>{
            return(
        <div key={index}>
        {
            name=== i.name &&
             <div className="card" style={{width: "50rem" ,  margin:"5rem" }}>
            <img src={i.imgUrl} className="card-img-top  "   style={{ objectFit: "cover" , height:"25rem" ,  width:"50rem"}} alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{i.name}</h5>
              <p className="card-text">{i.price}</p>
             <button className='btn btn-secondary w-100'> Add To Cart </button>
            </div>
          </div>
        }
        </div>
          )})
        }
    </div>
  )
}

export default ByItem
