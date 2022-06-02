import { User } from "../views/project-list/search-panel";
import { useAsync } from "./index";
import { useHttp } from "../utils/http";
import { useEffect } from "react";
import { cleanObject } from "../utils";

export const useUsers = (param?: Partial<User>) => {
  const { run, ...result } = useAsync<User[]>();
  const client = useHttp();
  useEffect(() => {
    run(client("users", { data: cleanObject(param || {}) }));
  }, [param]);
  return result;
};
