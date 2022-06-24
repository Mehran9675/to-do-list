import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Todos } from "services/types";
import getTodos from "../../services/get-todos";
import { useRouter } from "next/router";

type TodosContextI = {
  todos: Todos;
  setTodos: Dispatch<SetStateAction<Todos>>;
};

export const TodosContextInstance = createContext<TodosContextI>(
  {} as TodosContextI
);

const TodosContext = (props: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todos>([]);
  const { query } = useRouter();

  useEffect(() => {
    getTodos(query.filter as any).then((res) => setTodos(res));
  }, [query.filter]);

  return (
    <TodosContextInstance.Provider value={{ todos, setTodos }}>
      {props.children}
    </TodosContextInstance.Provider>
  );
};
export default TodosContext;
