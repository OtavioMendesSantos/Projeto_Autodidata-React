import React, { useEffect } from "react";

const Head = (props) => {
  useEffect(() => {
    document.title = props.title + " | Dogs";
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", props.description || "Dogs");
  }, []);
  return <></>;
};

export default Head;
