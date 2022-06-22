import { Typography, Row, Col } from "antd";
const { Title } = Typography;

const Rows = () => {
  return (
    <div className="container grid-container">
      <Title style={{ textAlign: "center" }}>Rows and Columns</Title>
      <Row gutter={[16, 16]}>
        <Col span={24}>col</Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
        <Col span={8}>col-8</Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
        <Col span={6}>col-6</Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
        <Col span={4}>col-4</Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={2}>col-2</Col>
        <Col span={2}>col-2</Col>
        <Col span={2}>col-2</Col>
        <Col span={2}>col-2</Col>
        <Col span={2}>col-2</Col>
        <Col span={2}>col-2</Col>
        <Col span={2}>col-2</Col>
        <Col span={2}>col-2</Col>
        <Col span={2}>col-2</Col>
        <Col span={2}>col-2</Col>
        <Col span={2}>col-2</Col>
        <Col span={2}>col-2</Col>
      </Row>
    </div>
  );
};

export default Rows;
