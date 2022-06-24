import classes from "./style.module.scss";
import { ReactNode } from "react";

const MainLayout = (props: { children: ReactNode | ReactNode[] }) => {
  return <div className={classes.container}>{props.children}</div>;
};
export default MainLayout;
