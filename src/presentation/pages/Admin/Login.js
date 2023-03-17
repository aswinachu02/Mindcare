import { Row, Form, Input, Button, message } from "antd";
import { useEffect } from "react";
import { credentials } from "../../../common/constants";
import { logger } from "../../../common/utils";
import routes from "../../utils/routes";

const AdminLogin = () => {
  const onFinish = (values) => {
    try {
      const { username, password } = values;
      if (Object.keys(credentials).includes(username)) {
        if (credentials[username] === password) {
          window.localStorage.setItem("loggedIn", true);
          window.location.href = routes.ADMIN_ADD_DOCTOR;
        } else {
          message.error("Bad credentials");
        }
      } else {
        message.error("Bad credentials");
      }
    } catch (error) {
      logger.error(error, "onFinish() in AdminLogin");
    }
  };

  useEffect(() => {
    const loggedIn = window.localStorage.getItem("loggedIn");
    if (loggedIn) {
      window.location.href = routes.ADMIN_ADD_DOCTOR;
    }
  }, []);

  return (
    <Row align="middle" justify="center" style={{ minHeight: "100vh" }}>
      <Form
        style={{ width: window.innerWidth <= 991 ? "80%" : "30%" }}
        layout="vertical"
        requiredMark={false}
        scrollToFirstError
        onFinish={onFinish}
      >
        <br />
        <h2 className="text-2xl mb-5 font-semibold text-themeColor">
          Admin Login
        </h2>
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "Username is required" }]}
        >
          <Input size="large" placeholder="Enter email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Password is required" }]}
        >
          <Input.Password size="large" placeholder="Type password" />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" size="large">
            Login
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default AdminLogin;
