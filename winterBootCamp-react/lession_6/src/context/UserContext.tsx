import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";
export type User = {
  id: number;
  name: string;
  role: string;
};

export type UserContextType = {
  user: User ;
  setUser: Dispatch<SetStateAction<User>> // important
};

export const UserContext = createContext<UserContextType | null>(null);

