import classes from "./style.module.scss";
import { useCallback, useContext, useMemo } from "react";
import { TodosContextInstance } from "../../context/todos-context";
import { useRouter } from "next/router";
import deleteTodo from "services/delete-todo";

const Footer = () => {
  const { todos, setTodos } = useContext(TodosContextInstance);
  const { query, push, pathname } = useRouter();

  const activeTodos = useMemo(
    () => todos.filter((todo) => !todo.isDone).length,
    [todos]
  );

  const handleFilter = useCallback(
    (filter: string) => () => push(`${pathname}?filter=${filter}`),
    []
  );

  const handleDeleteCompleted = useCallback(
    async () => setTodos(await deleteTodo("completed", query.filter as any)),
    [query]
  );

  return (
    <footer className={classes.container}>
      <span>
        <b>{activeTodos}</b>
        items left
      </span>
      <div>
        <span
          onClick={handleFilter("all")}
          data-active={query.filter === "all" || !query.filter}
        >
          All
        </span>
        <span
          onClick={handleFilter("active")}
          data-active={query.filter === "active"}
        >
          Active
        </span>
      </div>
      <button onClick={handleDeleteCompleted}>Clear Completed</button>
    </footer>
  );
};
export default Footer;
