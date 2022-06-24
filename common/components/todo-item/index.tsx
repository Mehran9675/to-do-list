import classes from "./style.module.scss";
import { Todo } from "services/types";
import {
  ChangeEvent,
  CSSProperties,
  FormEvent,
  useCallback,
  useContext,
  useState,
} from "react";
import { TodosContextInstance } from "../../context/todos-context";
import editTodo from "services/edit-todo";
import deleteTodo from "services/delete-todo";
import { useRouter } from "next/router";

const TodoItem = (props: { todo: Todo; style?: CSSProperties }) => {
  const { setTodos } = useContext(TodosContextInstance);
  const [isEditable, setEditable] = useState(false);
  const { query } = useRouter();

  const handleEditable = useCallback(
    () => setEditable(!isEditable),
    [isEditable]
  );

  const handleUpdateName = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setTodos(
        await editTodo(
          {
            ...props.todo,
            //@ts-ignore
            name: event.target[0].value,
          },
          query.filter as any
        )
      );
      setEditable(false);
    },
    [query]
  );

  const handleUpdateActive = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) =>
      setTodos(
        await editTodo(
          { ...props.todo, isDone: e.target.checked },
          query.filter as any
        )
      ),
    [query]
  );

  const handleDeleteTodo = useCallback(async () => {
    const data = await deleteTodo(props.todo.id as string, query.filter as any);
    setTodos(data);
  }, [query]);

  return (
    <div style={{ ...props.style }} className={classes.container}>
      <input
        onChange={handleUpdateActive}
        defaultChecked={props.todo.isDone}
        type="checkbox"
      />
      {isEditable ? (
        <form onSubmit={handleUpdateName}>
          <input defaultValue={props.todo.name} type="text" />
        </form>
      ) : (
        <span onDoubleClick={handleEditable}>{props.todo.name}</span>
      )}
      <button onClick={handleDeleteTodo}>X</button>
    </div>
  );
};
export default TodoItem;
