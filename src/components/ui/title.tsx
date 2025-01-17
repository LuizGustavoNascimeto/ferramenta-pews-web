import React from "react";

const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <h2 className="font-semibold text-3xl">{children}</h2>;
};

export default Title;
