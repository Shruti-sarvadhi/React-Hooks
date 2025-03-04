import React from 'react'
import { useReducer } from 'react'

const initialState={
  cart:[]
}

const reducer=(state,action)=>{
  switch (action.type) {
    case "ADD":return {cart:[...state.cart,action.payload]}
    case 'REMOVE':
      return { cart: state.cart.filter(item => item.id !== action.payload) };
    case 'CLEAR':
      return { cart: [] };
    default:
      return state;
  }
 
}

const App = () => {
  const [state,dispatch]=useReducer(reducer,initialState)

  const products = [
    { id: 1, name: 'Shirt', price: 20 },
    { id: 2, name: 'Pants', price: 30 }
  ];
  return (
    <div>
      {products.map(product => (
        <button
          key={product.id}
          onClick={() => dispatch({ type: 'ADD', payload: product })}
        >
          Add {product.name} (${product.price})
        </button>
      ))}

        <h2>Cart</h2>
        <ul>
        {state.cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => dispatch({ type: 'REMOVE', payload: item.id })}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch({ type: 'CLEAR' })}>Clear Cart</button>
    </div>
  )
}

export default App
