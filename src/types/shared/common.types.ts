export type ChildrenProps = {
  children: React.ReactNode;
  pathId?: string;
};

export type fetchReturnValue<T> = {
  [key: string]: T;
};
