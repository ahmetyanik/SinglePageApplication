import { useReducer } from 'react'

/*

Liste Pakete                [] initial State
  - neues Paket             action.type 'add'

  Paket                     { id, status, history }
    - ID
    - Status
      - bei DHL abgegeben
      - unterwegs
      - zugestellt

    - History
      - Ereignis

    - Actions
      - received            action.type 'received'
      - transit             action.type 'transit'
      - delivered           action.type 'delivered'

*/

function packageReducer(state, action) {
  switch (action.type) {
    case 'received':
      return state.map(pakage => {
        // setzen eines pakets auf status received
        if(action.id === pakage.id) {
          pakage.status = 'received'
          pakage.history.push({action: 'received'})
        }
        return pakage
      })
      break;

    case 'add':
      return [...state, {
        id: Math.floor(Math.random() * 1000),
        status: 'new',
        history: [{action: 'created'}]
      }]

    case 'transit':

      return state.map(pakage => {
        // setzen eines pakets auf status received
        if(action.id === pakage.id) {
          pakage.status = 'transit'
          pakage.history.push({action: 'received'})
        }
        return pakage

      })
      break;

    case 'delivered':

      return state.map(pakage => {
        // setzen eines pakets auf status received
        if(action.id === pakage.id) {
          pakage.status = 'delivered'
          pakage.history.push({action: 'received'})
        }
        return pakage

      })
      break;

  
    default:
      return state
      break;
  }
}

function App() {
  const packageState = [{
    id: 123,
    status: 'new',
    history: [{action: 'created'}]
  }]

  const [packages, dispatch] = useReducer(packageReducer, packageState)

  return (
    <div className="App">
      <button onClick={() => dispatch({type: 'add'})}>Add</button>
      <ul>
        {packages.map(pakage => (
          <li>
            {pakage.id} {pakage.status}
            <button onClick={() => dispatch({type: 'received', id: pakage.id})}>Bei DHL abgegeben</button>
            <button onClick={() => dispatch({type: 'transit', id: pakage.id})}>An Fahrer übergeben</button>
            <button onClick={() => dispatch({type: 'delivered', id: pakage.id})}>Zugestellt</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;