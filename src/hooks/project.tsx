import { useAsync } from "./index";
import { Project } from "../views/project-list/list";
import { useCallback, useEffect } from "react";
import { cleanObject } from "../utils";
import { useHttp } from "../utils/http";

export const useProject = (param?: Partial<Project>) => {
  const { run, ...result } = useAsync<Project[]>();
  const client = useHttp();
  const fetchProjects = useCallback(
    () => client("projects", { data: cleanObject(param || {}) }),
    [param, client]
  );
  useEffect(() => {
    run(fetchProjects(), {
      retry: fetchProjects,
    });
  }, [param, run, fetchProjects]);
  return result;
};
