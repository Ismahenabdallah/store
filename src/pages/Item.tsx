import { UseLocalStorage } from "../Components/UseLocalStorage"


export type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}
export type CartItem = StoreItemProps& {
  
  quantity: number,
  
}



function Item({ id, name, price, imgUrl }: StoreItemProps) {
const [cartItems, setCartItems] = UseLocalStorage<CartItem[]>(
    "shopping",
    []
  )
  
  console.log(cartItems)
  function getItemQuantity(id: number) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }
 
  const quantity = getItemQuantity(id)
  function increaseCartQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id,name, imgUrl,price, quantity: 1 }]
      } else {
        return currItems?.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function decreaseCartQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }
 function removeFromCart(id: number) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }
 
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imgUrl} className="card-img-top  " style={{ objectFit: "cover", height: "15rem", width: "17.9rem" }} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{price}</p>
        <div className="mt-auto">
          {quantity === 0 ? (
            <button className="w-100 btn-primary" onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: ".5rem" }}
              >
              <button onClick={() => decreaseCartQuantity(id)}>-</button>
                <div>
                  <span className="fs-3">{quantity}</span> in cart
                </div>
                <button onClick={() => increaseCartQuantity(id)}>+</button>
              </div>
         <button
                onClick={() => removeFromCart(id)}
                className='btn-danger w-100'
              >
                Remove
          </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Item
