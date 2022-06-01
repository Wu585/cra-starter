import ProjectListScreen from "./views/project-list";
import { useAuth } from "./context/auth-context";
import styled from "@emotion/styled";
import { Row } from "./components/lib";

export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <Container>
      <Header between={true}>
        <HeaderLeft gap={true}>
          <h3>Logo</h3>
          <h3>项目</h3>
          <h3>用户</h3>
        </HeaderLeft>
        <HeaderRight>
          <button onClick={logout}>登出</button>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  grid-template-areas:
    "header header header"
    "main main main";
  height: 100vh;
`;

const Header = styled(Row)`
  grid-area: header;
`;

const HeaderLeft = styled(Row)``;

const HeaderRight = styled.div``;

const Main = styled.main`
  grid-area: main;
`;
