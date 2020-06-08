import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Wrapper = ({ children }: Props) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;
