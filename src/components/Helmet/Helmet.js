import React from "react";

const Helmet = (props) => {
  document.title = "RR Foods -" + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
