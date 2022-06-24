import { Todo } from "./types";
import axios from "axios";
import END_POINTS from "./end-points.enum";
import getTodos from "./get-todos";

const postTodo = async (todo: Todo, filter?: "all" | "active") => {
  try {
    await axios.post(END_POINTS.WRITE_TODO, todo);
    return await getTodos(filter);
  } catch (e) {
    return [];
  }
};
export default postTodo;
