import React, { FC } from "react";
import { Button, Drawer } from "antd";

interface ProjectModalProps {
  projectModalOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: FC<ProjectModalProps> = ({
  projectModalOpen,
  onClose,
}) => {
  return (
    <Drawer onClose={onClose} visible={projectModalOpen} width={"100%"}>
      <h1>Project Modal</h1>
      <Button onClick={onClose}>关闭</Button>
    </Drawer>
  );
};
