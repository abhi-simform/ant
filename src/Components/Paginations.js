import { Pagination, Typography } from "antd";

const { Title } = Typography;

const Paginations = () => {
  return (
    <div className="container pagination-container">
      <Title style={{ textAlign: "center" }}>Pagination</Title>
      <Pagination total={85} showSizeChanger showQuickJumper showTotal={(total) => `Total ${total} items`} />
    </div>
  );
};

export default Paginations;
