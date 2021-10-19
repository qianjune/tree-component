// tree-node-component
import * as React from "react";
import { useContext } from "react";
import { BaseContext } from "./context";
import { TreeNodeProps } from "./interface";
const TreeNode = (props: TreeNodeProps) => {
  const { onClick, uniqueId, name } = props;
  const { state, dispatch } = useContext(BaseContext);
  const handleMouseEnter = () => {
    dispatch({ type: "setHoveredId", payload: { hoveredId: uniqueId } });
  };
  const handleMouseLeave = () => {
    dispatch({ type: "setHoveredId", payload: { hoveredId: "" } });
  };
  const isLight = (state.hoveredId as string).startsWith(uniqueId);
  return (
    <div
      className={`tree-node-wrap ${isLight ? "tree-node-light" : ""}`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {name}
    </div>
  );
};

export default React.memo(TreeNode);
