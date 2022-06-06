import React from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useDebounce, useDocumentTitle } from "../../hooks";
import styled from "@emotion/styled";
import { Typography } from "antd";
import { useProject } from "../../hooks/project";
import { useUsers } from "../../hooks/user";
import { useProjectsSearchParams } from "./util";

const ProjectListScreen = () => {
  const [param, setParam] = useProjectsSearchParams();
  const debouncedParam = useDebounce(param);
  const { isLoading, error, data: list } = useProject(debouncedParam);
  const { data: users } = useUsers();

  useDocumentTitle("项目列表", false);

  return (
    <Container>
      <h1>项目列表</h1>
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <List users={users || []} dataSource={list || []} loading={isLoading} />
    </Container>
  );
};

ProjectListScreen.whyDidYouRender = false;

export default ProjectListScreen;

const Container = styled.div`
  padding: 3.2rem;
`;
