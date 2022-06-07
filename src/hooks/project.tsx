import { useAsync } from "./index";
import { Project } from "../views/project-list/list";
import { useEffect } from "react";
import { cleanObject } from "../utils";
import { useHttp } from "../utils/http";

export const useProject = (param?: Partial<Project>) => {
  const { run, ...result } = useAsync<Project[]>();
  const client = useHttp();
  const fetchProjects = () =>
    client("projects", { data: cleanObject(param || {}) });
  useEffect(() => {
    run(fetchProjects(), {
      retry: fetchProjects,
    });
  }, [param]);
  return result;
};
