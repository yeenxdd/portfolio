import { ConfigProvider, Menu, MenuProps, theme, Typography } from "antd";
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
    <ConfigProvider
      theme={{
        token: {},
        components: {
          Layout: { headerBg: "#E63946" },
          Menu: { itemBg: "none" },
        },
      }}
    >
      <Header style={{ display: "flex" }}>
        <Typography>
          <Title>
            <span style={{ color: "#1D3557" }}>Tai</span>{" "}
            <span style={{ color: "white" }}>Ye En</span>
          </Title>
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
