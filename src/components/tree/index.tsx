import { ReactChild, useReducer } from "react";
import { TreeData } from "./interface";
import TreeNode from "./treeNode";
import TreeChildren from "./treeChildren";
import { BaseContext, baseInfo, reducer } from "./context";
import "./styles.scss";

const buildTreeNode = (data: TreeData, level = 1, uniqueId = "0"): any => {
  const { id, children } = data;
  if (Array.isArray(children) && children.length > 0) {
    return (
      <TreeChildren key={uniqueId} uniqueId={uniqueId} name={id} level={level}>
        {children.map((child: TreeData, i: number) =>
          buildTreeNode(child, level++, `${uniqueId}-${i}`)
        )}
      </TreeChildren>
    );
  } else {
    return (
      <TreeNode uniqueId={uniqueId} level={level} key={uniqueId} name={id} />
    );
  }
};
const TreeWrap = (props: { children: ReactChild }) => {
  const [state, dispatch] = useReducer(reducer, baseInfo);
  const { children } = props;
  return (
    <BaseContext.Provider value={{ state, dispatch }}>
      <div className="tree-wrap">{children}</div>
    </BaseContext.Provider>
  );
};
const Tree = (props: { data: TreeData }) => {
  const { data } = props;
  return (
    <TreeWrap>
      {data ? buildTreeNode(data || {}) : <span>This is Tree Component</span>}
    </TreeWrap>
  );
};

export default Tree;
