import React from "react";
import { useFederatedComponent } from "yah-js-sdk";

const TodoItem11082022 = (props) => {
  const system = {
    url: `${process.env.BLOCK_ENV_URL_todoItem11082022}/remoteEntry.js`,
    scope: "todoItem11082022",
    module: "./todoItem11082022",
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

export default TodoItem11082022;
