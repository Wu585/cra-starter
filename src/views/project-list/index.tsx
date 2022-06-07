import React from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useDebounce, useDocumentTitle } from "../../hooks";
import styled from "@emotion/styled";
import { Button, Typography } from "antd";
import { useProject } from "../../hooks/project";
import { useUsers } from "../../hooks/user";
import { useProjectsSearchParams } from "./util";
import { Row } from "../../components/lib";

const ProjectListScreen = (props: {
  setProjectModalOpen: (isOpen: boolean) => void;
}) => {
  const [param, setParam] = useProjectsSearchParams();
  const debouncedParam = useDebounce(param);
  const { isLoading, error, data: list, retry } = useProject(debouncedParam);
  const { data: users } = useUsers();

  useDocumentTitle("项目列表", false);

  return (
    <Container>
      <Row between={true}>
        <h1>项目列表</h1>
        <Button onClick={() => props.setProjectModalOpen(true)}>
          创建项目
        </Button>
      </Row>
      <SearchPanel users={users || []} param={param} setParam={setParam} />
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <List
        refresh={retry}
        users={users || []}
        dataSource={list || []}
        loading={isLoading}
        setProjectModalOpen={props.setProjectModalOpen}
      />
    </Container>
  );
};

ProjectListScreen.whyDidYouRender = false;

export default ProjectListScreen;

const Container = styled.div`
  padding: 3.2rem;
`;
