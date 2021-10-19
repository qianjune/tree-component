// tree-children-wrap-component

import TreeNode from "./treeNode";
import { TreeChildrenData } from "./interface";
import { useState } from "react";
const TreeChildren = (props: TreeChildrenData) => {
  let { level, name, children, uniqueId } = props;
  const [isOpen, setIsOpen] = useState(true);
  const handleTreeNodeClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <TreeNode
        onClick={handleTreeNodeClick}
        level={level}
        uniqueId={uniqueId}
        key={uniqueId}
        name={name}
      />
      {isOpen && (
        <div
          style={{
            paddingLeft: `${10 * level++}px`
          }}
          className="children-wrap"
        >
          {children}
        </div>
      )}
    </>
  );
};

export default TreeChildren;
