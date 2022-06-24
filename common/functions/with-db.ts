import { join } from "path";
import { JSONFile, Low } from "lowdb";
import { Todos } from "../../services/types";

const withDB = async () => {
  const file = join(__dirname.split(".next")[0], "db.json");
  const adapter = new JSONFile<Todos>(file);
  const db = new Low(adapter);
  await db.read();
  return db;
};
export default withDB;
