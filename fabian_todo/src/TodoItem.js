// props = { todo: { text: String, done: Boolean } }
const TodoItem = (props) => {
    // const todo = props.todo;
    const { todo, done } = props;
  
    return (
    <div>
      <span>{todo.text}</span>
      // ... Mehr HTML ;)
    </div>
    );
  };