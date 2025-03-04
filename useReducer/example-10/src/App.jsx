import React, { useReducer } from 'react';

const initialState = {
  expenses: [],
  description: '',
  amount: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'FIELD':
      return { ...state, [action.field]: action.value };
    case 'EXPENSE':
      return {
        expenses: [...state.expenses, { 
          id: Date.now(), 
          description: state.description, 
          amount: Number(state.amount) 
        }],
        description: '',
        amount: ''
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const total = state.expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div>
      <h1>Expense Tracker</h1>
      <input
        value={state.description}
        onChange={(e) => dispatch({ type: 'FIELD', field: 'description', value: e.target.value })}
        placeholder="Description"
      />
      <input
        type="number"
        value={state.amount}
        onChange={(e) => dispatch({ type: 'FIELD', field: 'amount', value: e.target.value })}
        placeholder="Amount"
      />
      <button onClick={() => dispatch({ type: 'EXPENSE' })}>Add</button>
      <ul>
        {state.expenses.map(expense => (
          <li key={expense.id}>
            {expense.description}: ${expense.amount}
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default App;