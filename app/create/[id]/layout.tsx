import { ReactNode } from "react";

function LayoutCreate({ children }: { children: ReactNode }) {
  return <div className="mt-10">{children}</div>;
}

export default LayoutCreate;
