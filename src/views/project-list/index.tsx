import React, { useEffect, useState } from "react";
import { SearchPanel } from "./search-panel";
import { List, Project } from "./list";
import { cleanObject } from "../../utils";
import { useDebounce, useMount } from "../../hooks";
import { useHttp } from "../../utils/http";
import styled from "@emotion/styled";

const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debouncedParam = useDebounce(param);
  const [users, setUsers] = useState([]);
  const [list, setList] = useState<Project[]>([]);
  const client = useHttp();
  useEffect(() => {
    client("projects", { data: cleanObject(debouncedParam) }).then(setList);
  }, [debouncedParam]);
  useMount(() => {
    client("users").then(setUsers);
  });
  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List users={users} list={list} />
    </Container>
  );
};

export default ProjectListScreen;

const Container = styled.div`
  padding: 3.2rem;
`;
