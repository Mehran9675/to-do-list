import { NextApiRequest, NextApiResponse } from "next";
import withDB from "common/functions/with-db";

const readTodos = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await withDB();
  try {
    const { query } = req;
    switch (query.filter) {
      case "all":
        return res.status(200).json(db.data);
      case "active":
        const activeTodos = db.data?.filter((todo) => !todo.isDone);
        return res.status(200).json(activeTodos);
      default:
        return res.status(200).json(db.data);
    }
  } catch (e) {
    res.status(500).json(e);
  }
};
export default readTodos;
