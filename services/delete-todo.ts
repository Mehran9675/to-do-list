import axios from "axios";
import END_POINTS from "./end-points.enum";
import getTodos from "./get-todos";

const deleteTodo = async (todoId: string, filter: "all" | "active") => {
  try {
    await axios.delete(`${END_POINTS.DELETE_TODO}?todoId=${todoId}`);
    return await getTodos(filter);
  } catch (e) {
    return [];
  }
};
export default deleteTodo;
