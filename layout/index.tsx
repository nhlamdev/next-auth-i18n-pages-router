import { ReactElement } from "react";
import { ClientLayoutComponent } from "./client";
import { ManagerLayoutComponent } from "./manager";
interface MainCreateLayoutComponentProps {
  layout?: string;
  children: ReactElement;
}

export const MainCreateLayoutComponent = (
  props: MainCreateLayoutComponentProps
) => {
  const { layout, children } = props;

  switch (layout) {
    case "client":
      return <ClientLayoutComponent>{children}</ClientLayoutComponent>;
    case "manager":
      return <ManagerLayoutComponent>{children}</ManagerLayoutComponent>;
    default:
      return children;
  }
};
