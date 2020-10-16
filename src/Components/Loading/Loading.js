import React from "react";
import { css } from "@emotion/core";

import DotLoader from "react-spinners/DotLoader";

const Loading = () => {
  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;
  return (
    <div
      className="test"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <DotLoader css={override} size={60} color={"orange"} />
    </div>
  );
};

export default Loading;
