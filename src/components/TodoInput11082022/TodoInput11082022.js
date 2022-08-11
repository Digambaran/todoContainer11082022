import React from "react";
import { useFederatedComponent } from "yah-js-sdk";

const TodoInput11082022 = (props) => {
  const system = {
    url: `${process.env.BLOCK_ENV_URL_todoInput11082022}/remoteEntry.js`,
    scope: "todoInput11082022",
    module: "./todoInput11082022",
  };

  const { Component: FederatedComponent, errorLoading } = useFederatedComponent(
    system?.url,
    system?.scope,
    system?.module,
    React
  );

  // console.log(FederatedComponent);
  return (
    <React.Suspense fallback={""}>
      {errorLoading
        ? `Error loading module "${module}"`
        : FederatedComponent && <FederatedComponent {...props} />}
    </React.Suspense>
  );
};

export default TodoInput11082022;
