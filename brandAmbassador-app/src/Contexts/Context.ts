import { Context, createContext, useContext } from "react";
import { ViewMode } from "../Main_Components/ParentComponent";

// this is a hook
type PageContextType = {
  viewMode: ViewMode | null;
  setViewMode: React.Dispatch<React.SetStateAction<ViewMode>>;
};

export const PageContext = createContext<PageContextType | null>(null);

export function useContextAndErrorIfNull<ItemType>(
  context: Context<ItemType | null>
): ItemType {
  const contextValue = useContext(context);
  if (contextValue === null) {
    throw Error("Context has not been Provided!");
  }
  return contextValue;
}
