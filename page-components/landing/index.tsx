import classes from "./style.module.scss";
import { useCallback, useContext } from "react";
import { TodosContextInstance } from "common/context/todos-context";
import TodoItem from "common/components/todo-item";
import CreateNewTodo from "common/components/create-new-todo";
import { Todo } from "services/types";
import Footer from "common/components/footer";

const Landing = () => {
  const { todos } = useContext(TodosContextInstance);

  const renderRows = useCallback(
    (todo: Todo) => <TodoItem key={todo.id} todo={todo} />,
    []
  );

  return (
    <>
      <CreateNewTodo />
      <div className={classes.container}>{todos.map(renderRows)}</div>
      <Footer />
    </>
  );
};
export default Landing;
