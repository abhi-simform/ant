import { Button, Drawer, Typography } from "antd";
import React, { useState } from "react";

const { Title } = Typography;

const Drawers = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container drawers-container" style={{ position: "relative", overflow: "hidden" }}>
      <Title style={{ textAlign: "center" }}>Drawer</Title>
      <div className="site-drawer-render-in-current-wrapper">
        Click the button below to open a drawer
        <div
          style={{
            marginTop: 16,
          }}
        >
          <Button type="primary" onClick={showDrawer}>
            Open
          </Button>
        </div>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
          getContainer={false}
          style={{
            position: "absolute",
          }}
        >
          <p>Some contents...</p>
        </Drawer>
      </div>
    </div>
  );
};

export default Drawers;
