import { NextApiRequest, NextApiResponse } from "next";
import { Todo } from "services/types";
import withDB from "common/functions/with-db";

const deleteTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await withDB();
  try {
    const { query } = req;
    if (query.todoId === "completed")
      db.data = db.data?.filter((todo: Todo) => !todo.isDone) || [];
    else
      db.data =
        db.data?.filter((todo: Todo) => todo?.id !== query.todoId) || [];
    await db.write();
    return res.status(200).json("success");
  } catch (e) {
    res.status(500).json(e);
  }
};
export default deleteTodo;
