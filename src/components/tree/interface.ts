export interface TreeData {
  id: string;
  children?: TreeData[];
}
export interface TreeNodeProps {
  name: string;
  level: number;
  key: string;
  uniqueId: string;
  onClick?: () => void;
}
export interface TreeChildrenData {
  level: number;
  name: string;
  uniqueId: string;
  children: React.ReactElement[];
}
