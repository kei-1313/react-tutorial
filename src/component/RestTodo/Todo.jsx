import List from "./List"
import Form from "./Form"
import "./api/ApiTodo"
import { TodoProvider } from "./TodoContext"

const Todo = () => {
  return (
    <div className='tutorial'>
      <TodoProvider>
        <List />
        <Form />
      </TodoProvider>
    </div>
  )
};
export default Todo;
