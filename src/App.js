import "./App.scss";
import { Divider } from "antd";
import Typographies from "./Components/Typographies";
import Buttons from "./Components/Buttons";
import Rows from "./Components/Rows";
import Breadcrumbs from "./Components/Breadcrumbs";
import Dropdowns from "./Components/Dropdowns";
import Paginations from "./Components/Paginations";
import NavSteps from "./Components/NavSteps";
import Alerts from "./Components/Alerts";
import Drawers from "./Components/Drawers";
import Modals from "./Components/Modals";
import Notifications from "./Components/Notifications";

function App() {
  return (
    <div className="App">
      <Typographies />
      <Divider>Divider</Divider>
      <Buttons />
      <Divider>Divider</Divider>
      <Rows />
      <Divider>Divider</Divider>
      <Breadcrumbs />
      <Divider>Divider</Divider>
      <Dropdowns />
      <Divider>Divider</Divider>
      <Paginations />
      <Divider>Divider</Divider>
      <NavSteps />
      <Divider>Divider</Divider>
      <Alerts />
      <Divider>Divider</Divider>
      <Drawers />
      <Divider>Divider</Divider>
      <Modals />
      <Divider>Divider</Divider>
      <Notifications />
    </div>
  );
}

export default App;
