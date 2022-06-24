import axios from "axios";
import END_POINTS from "./end-points.enum";
import { Todo } from "./types";
import getTodos from "./get-todos";

const editTodo = async (todo: Todo, filter: "all" | "active") => {
  try {
    await axios.patch(END_POINTS.EDIT_TODO, todo);
    console.log(filter);
    return await getTodos(filter);
  } catch (e) {
    return [];
  }
};
export default editTodo;
