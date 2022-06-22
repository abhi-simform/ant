import { Steps, Typography } from "antd";
import React, { useState } from "react";

const { Title } = Typography;
const { Step } = Steps;

const NavSteps = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  return (
    <div className="container navsteps-container">
      <Title style={{ textAlign: "center" }}>Steps</Title>
      <Steps type="navigation" size="small" current={current} onChange={onChange} className="site-navigation-steps">
        <Step title="Step 1" subTitle="00:00:05" status="finish" description="This is a description." />
        <Step title="Step 2" subTitle="00:01:02" status="process" description="This is a description." />
        <Step title="Step 3" subTitle="waiting for longlong time" status="wait" description="This is a description." />
      </Steps>
    </div>
  );
};

export default NavSteps;
