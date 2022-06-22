import { Breadcrumb, Typography } from "antd";
const { Title } = Typography;

const Breadcrumbs = () => {
  return (
    <div className="container breadcrums-container">
      <Title style={{ textAlign: "center" }}>Breadcrumb</Title>
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
        <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
        <Breadcrumb.Item>An Application</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
