// Test Daten
import {useReducer} from "react";

  const todoInitial = [
    {
      text: 'Wäsche waschen',
      done: true,
    },
    {
      text: 'Abendessen kochen',
      done: false,
    },
    {
      text: 'Fehrnsehen',
      done: false,
    },
  ];

  const todosReducer = (array, action) => { // original Array/Object NICHT bearbeiten
    // hinzufügen / 'add'
    // { type: 'add', payload: { text: String } }
    if (action.type === 'add') {
      const todoText = action.payload.text

      const todo = {
        text: todoText,
        done: false,
      };

      const result = [ ...array, todo ];
      return result;
    }

    // status ändern / 'toggle'
    // { type: 'toggle', payload: { index: Number } }
    if (action.type === 'toggle') {
      const index = action.payload.index;

      return array.map((todo, idx) => {
        if (idx === index) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
    }

    // löschen / 'delete'
    // { type: 'delete', payload: { index: Number } }

    // NUR das Original zurückgeben wenn sich nichts geändert hat.
    return array;
  }

  const [ todos, dispatchTodos ] = useReducer(todosReducer, todoInitial);

  const addTodo = (name) => {
    dispatchTodos(
      { type: 'add', payload: { text: name } }
    );
  };

  export default App;