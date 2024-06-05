import { Header } from "../header";
import { NaviationBar } from "../header/navigationBar";

const WebLayout = ({ children }) => {
  return (
    <main>
      <Header />
      <NaviationBar />
      <main>{children}</main>
    </main>
  );
};

export default WebLayout;
