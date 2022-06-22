import React from "react";
import { Menu, Dropdown, Button, message, Space, Tooltip, Typography } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
const { Title } = Typography;

const handleButtonClick = (e) => {
  message.info("Click on left button.");
  console.log("click left button", e);
};

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const menu = (
  <Menu
    onClick={handleMenuClick}
    items={[
      {
        label: "1st menu item",
        key: "1",
        icon: <UserOutlined />,
      },
      {
        label: "2nd menu item",
        key: "2",
        icon: <UserOutlined />,
      },
      {
        label: "3rd menu item",
        key: "3",
        icon: <UserOutlined />,
      },
    ]}
  />
);

const Dropdowns = () => (
  <div className="container dropdowns-container">
    <Title style={{ textAlign: "center" }}>Dropdowns</Title>
    <Space wrap>
      <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
        Dropdown
      </Dropdown.Button>
      <Dropdown.Button overlay={menu} placement="bottom" icon={<UserOutlined />}>
        Dropdown
      </Dropdown.Button>
      <Dropdown.Button onClick={handleButtonClick} overlay={menu} disabled>
        Dropdown
      </Dropdown.Button>
      <Dropdown.Button
        overlay={menu}
        buttonsRender={([leftButton, rightButton]) => [
          <Tooltip title="tooltip" key="leftButton">
            {leftButton}
          </Tooltip>,
          React.cloneElement(rightButton, {
            loading: true,
          }),
        ]}
      >
        With Tooltip
      </Dropdown.Button>
      <Dropdown overlay={menu}>
        <Button>
          <Space>
            Button
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </Space>
  </div>
);

export default Dropdowns;
