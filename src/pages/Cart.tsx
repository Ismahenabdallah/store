import { useState } from 'react'


export function getFormValues() {
    const storedValues = localStorage.getItem('shopping');

    if (!storedValues)
        return {
           
          
            id: "",
            name: "",
            price: "",
            imgUrl: "",
            quantity:""
           
         
        
        };
    return JSON.parse(storedValues);
}


function Cart() {
    const [shopping] = useState(getFormValues)

    
    
  return (
    <div className='container mt-5 mb-5 container-lg  border-bottom border-3'>

    
      {shopping?.map((i:any , index:number)=>{return(<div>
<div key={index} className='d-flex align-items-center ml-2 mb-2 gap-5'>
  <img src={i.imgUrl} alt="..." style={{ width: "125px", height: "75px", objectFit: "cover" }}/>
<p> <em>name : </em><span style={{color: 'red'}}>{i.name}</span></p>
<p><em> price :</em><span style={{color: 'red'}}>{i.price}</span></p>
<p> <em>quantity :</em> <span style={{color: 'red'}}>{i.quantity}</span></p>

</div>
 </div>)})}
    

    </div>
  )
}

export default Cart
