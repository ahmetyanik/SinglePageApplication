import TodoItem from './TodoItem';

// ... im Template
 {props.todos.map((todo) => (<TodoItem todo={todo} />))}