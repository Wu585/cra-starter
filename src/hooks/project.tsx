import { useAsync } from "./index";
import { Project } from "../views/project-list/list";
import { useEffect } from "react";
import { cleanObject } from "../utils";
import { useHttp } from "../utils/http";

export const useProject = (param?: Partial<Project>) => {
  const { run, ...result } = useAsync<Project[]>();
  const client = useHttp();
  useEffect(() => {
    run(client("projects", { data: cleanObject(param || {}) }));
  }, [param]);
  return result;
};
