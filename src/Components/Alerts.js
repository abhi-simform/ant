import { Alert, Typography } from "antd";
const { Title } = Typography;

const Alerts = () => {
  return (
    <div className="container alerts-container">
      <Title style={{ textAlign: "center" }}>Alerts</Title>
      <Alert message="Success Text" description="Success Description Success Description Success Description" type="success" />
      <Alert message="Info Text" description="Info Description Info Description Info Description Info Description" type="info" />
      <Alert message="Warning Text" description="Warning Description Warning Description Warning Description Warning Description" type="warning" />
      <Alert message="Error Text" description="Error Description Error Description Error Description Error Description" type="error" />
    </div>
  );
};

export default Alerts;
