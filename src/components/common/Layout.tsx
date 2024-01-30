import React, { ReactNode } from "react";

export const Layout = ({ children, className, ...props }: any) => {
  return (
    <div className="max-w-screen-xl mx-auto px-[16px]" {...props}>
      {children}
    </div>
  );
};
