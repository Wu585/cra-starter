import React, { FC } from "react";
import { Form, Input } from "antd";
import { Project } from "./list";
import { UserSelect } from "../../components/user-select";

export interface User {
  name: string;
  id: number;
  email: string;
  title: string;
  organization: string;
  token: string;
}

export interface SearchPanelProps {
  param: Partial<Pick<Project, "name" | "personId">>;
  users: User[];
  setParam: (param: SearchPanelProps["param"]) => void;
}

export const SearchPanel: FC<SearchPanelProps> = ({
  param,
  setParam,
  users,
}) => {
  return (
    <Form style={{ marginBottom: "2rem" }} layout={"inline"}>
      <Form.Item>
        <Input
          type="text"
          placeholder={"项目名"}
          value={param.name}
          onChange={(e) => {
            setParam({
              ...param,
              name: e.target.value,
            });
          }}
        />
      </Form.Item>
      <Form.Item>
        <UserSelect
          defaultOptionName={"负责人"}
          value={param.personId}
          onChange={(value) => {
            setParam({
              ...param,
              personId: value,
            });
          }}
        />
      </Form.Item>
    </Form>
  );
};
