import classes from "./style.module.scss";
import { FormEvent, useCallback, useContext } from "react";
import { TodosContextInstance } from "../../context/todos-context";
import postTodo from "services/post-todo";
import { useRouter } from "next/router";

const CreateNewTodo = () => {
  const { setTodos } = useContext(TodosContextInstance);
  const { query } = useRouter();

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setTodos(
        //@ts-ignore
        await postTodo({ name: e.target[0].value, isDone: false }, query.filter)
      );
    },
    [query]
  );

  return (
    <form onSubmit={handleSubmit} className={classes.container}>
      <input
        required
        type="text"
        name="todo-name"
        className={classes["newTodo"]}
        placeholder="What needs to be done?"
      />
    </form>
  );
};
export default CreateNewTodo;
