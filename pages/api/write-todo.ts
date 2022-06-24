import { NextApiRequest, NextApiResponse } from "next";
import withDB from "common/functions/with-db";
import randomStr from "common/functions/random-str";

const writeTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await withDB();
  try {
    const { body } = req;
    db.data?.push({ ...body, id: randomStr() });
    await db.write();
    return res.status(200).json("success");
  } catch (e) {
    res.status(500).json(e);
  }
};

export default writeTodo;
