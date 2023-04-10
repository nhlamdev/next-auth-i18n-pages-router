import { ReactElement } from "react";
import { LeftbarManagerLayoutComponent } from "./left-bar";
interface ManagerLayoutComponentProps {
  children: ReactElement;
}

export const ManagerLayoutComponent = (props: ManagerLayoutComponentProps) => {
  const { children } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      <LeftbarManagerLayoutComponent />
      <div style={{ padding: "20px 100px" }}>{children}</div>
    </div>
  );
};
