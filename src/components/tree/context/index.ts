// tree-context
import * as React from "react";
const baseInfo = {
  hoveredId: ""
};

const BaseContext = React.createContext(
  {} as {
    state: { [keyName: string]: any };
    dispatch: React.Dispatch<any>;
  }
);

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "setHoveredId":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
export { BaseContext, baseInfo, reducer };
