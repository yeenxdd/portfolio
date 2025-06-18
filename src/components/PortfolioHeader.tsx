import { ConfigProvider, Menu, MenuProps, Typography } from "antd";
import React from "react";
import { Header } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    key: "home",
    label: "Home",
  },
  {
    key: "about",
    label: "About",
  },
  {
    key: "experience",
    label: "Experience",
  },
  {
    key: "skills",
    label: "Skills",
  },
  {
    key: "projects",
    label: "Projects",
  },
  {
    key: "language",
    label: "Language",
  },
  {
    key: "contact",
    label: "Contact",
  },
];

const PortfolioHeader: React.FC = () => {
  return (
    <ConfigProvider>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <Typography>
          <Title>Tai Ye En</Title>
        </Typography>
        <Menu
          theme="light"
          mode="horizontal"
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
    </ConfigProvider>
  );
};

export default PortfolioHeader;
