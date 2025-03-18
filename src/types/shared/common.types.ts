import { Champion } from "./riot.api.types";

export type ChildrenProps = {
  children: React.ReactNode;
};

export type fetchReturnValue<T> = {
  [key: string]: T;
};

export type UseRotationReturnValue = {
  isPending: boolean;
  isError: boolean;
  error: Error | null;
  maxNewUserLevel: number;
  rotationList: Champion[];
  rotationListForNewUser: Champion[];
};
