import {
  BorderBottomOutlined,
  BorderTopOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
} from "@ant-design/icons";
import { Button, Typography, notification } from "antd";

const { Title } = Typography;

const openNotification = (placement) => {
  notification.info({
    message: `Notification ${placement}`,
    description: "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    placement,
  });
};

const Notifications = () => {
  return (
    <div className="container notification-container">
      <Title style={{ textAlign: "center" }}>Notifications</Title>
      <Button type="primary" onClick={() => openNotification("top")} icon={<BorderTopOutlined />}>
        Top
      </Button>
      <Button type="primary" onClick={() => openNotification("bottom")} icon={<BorderBottomOutlined />}>
        Bottom
      </Button>
      <Button type="primary" onClick={() => openNotification("topLeft")} icon={<RadiusUpleftOutlined />}>
        Top Left
      </Button>
      <Button type="primary" onClick={() => openNotification("topRight")} icon={<RadiusUprightOutlined />}>
        Top Right
      </Button>
      <Button type="primary" onClick={() => openNotification("bottomLeft")} icon={<RadiusBottomleftOutlined />}>
        Bottom Left
      </Button>
      <Button type="primary" onClick={() => openNotification("bottomRight")} icon={<RadiusBottomrightOutlined />}>
        Bottom Right
      </Button>
    </div>
  );
};

export default Notifications;
