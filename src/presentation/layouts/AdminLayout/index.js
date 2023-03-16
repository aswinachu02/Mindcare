import { Row, Spin } from "antd";
import { useEffect, useState } from "react";
import routes from "../../utils/routes";

const AdminLayout = ({ children }) => {
  const [authenticating, setAuthenticating] = useState(true);

  useEffect(() => {
    const loggedIn = window.localStorage.getItem("loggedIn");
    if (!loggedIn) {
      window.location.href = routes.ADMIN_LOGIN;
    } else {
      setAuthenticating(false);
    }
  }, []);

  if (authenticating)
    return (
      <Row style={{ height: "80vh" }} justify="center" align="middle">
        <Spin isFullPage text="Authenticating..." />
      </Row>
    );
  return <>{children}</>;
};

export default AdminLayout;
