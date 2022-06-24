import { NextApiRequest, NextApiResponse } from "next";
import withDB from "common/functions/with-db";

const editTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await withDB();
  try {
    if (!db.data) return res.status(500).json("No data");
    const { body } = req;
    const todoItem = db.data?.findIndex((todo) => todo.id === body.id);
    db.data[todoItem] = body;
    await db.write();
    return res.status(200).json("success");
  } catch (e) {
    return res.status(500).json(e);
  }
};
export default editTodo;
