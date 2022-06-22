import { Button, Tooltip, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Title } = Typography;

const Buttons = () => {
  return (
    <div className="container button-container">
      <Title style={{ textAlign: "center" }}>Buttons</Title>
      <Button>Default Button</Button>
      <Button type="primary">Primary Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link" href="https://www.google.com">
        Link Button
      </Button>
      <Tooltip title="search">
        <Button type="primary" icon={<SearchOutlined />}>
          Search Button
        </Button>
      </Tooltip>
    </div>
  );
};

export default Buttons;
