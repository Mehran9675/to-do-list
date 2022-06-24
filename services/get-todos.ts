import axios from "axios";
import END_POINTS from "./end-points.enum";

const getTodos = async (filter?: "all" | "active") => {
  try {
    const { data } = await axios.get(
      `${END_POINTS.READ_TODO}?filter=${filter || "all"}`
    );
    return data;
  } catch (e) {
    return [];
  }
};
export default getTodos;
