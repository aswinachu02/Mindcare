import { Button, Form, Input, InputNumber, Row } from "antd";
import FeatherIcon from "feather-icons-react";
import React, { useState } from "react";
import { logger } from "../../../common/utils";
import { addDoctor } from "../../../infrastructure/doctor";
import AdminLayout from "../../layouts/AdminLayout";

const AdminAddDoctor = () => {
  const [form] = Form.useForm();
  const [unameStatus, setUnameStatus] = useState("none");
  const [usernames, setUsernames] = useState(["doctor"]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onFinish = async (values) => {
    setIsSubmitting(true);
    try {
      await addDoctor(values?.username, values);
      setUsernames((prev) => [...prev, values?.username]);
      form.resetFields();
    } catch (error) {
      logger.error(error, "onFinish() in AdminAddDoctor");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLiveCheck = (_, val) => {
    setUnameStatus("loading");
    if (val?.length < 4) {
      setUnameStatus("no");
      return Promise.reject(
        new Error("Username must atleast have 4 characters")
      );
    } else if (val?.length > 50) {
      setUnameStatus("no");
      return Promise.reject(new Error("Username cannot exceed 50 characters"));
    } else if (!RegExp("^([a-zA-Z0-9_]){4,50}$").test(val)) {
      setUnameStatus("no");
      return Promise.reject(
        new Error("Username can only have alpahbets, numbers or underscores")
      );
    } else if (
      usernames.some(
        (item) => item.username?.toLowerCase() === val?.toLowerCase()
      )
    ) {
      setUnameStatus("no");
      return Promise.reject(new Error("Username already taken"));
    } else {
      setUnameStatus("yes");
      return Promise.resolve();
    }
  };

  return (
    <AdminLayout>
      <Row justify="center" style={{ height: "100vh" }}>
        <Form
          form={form}
          style={{ width: window.innerWidth <= 991 ? "80%" : "30%" }}
          layout="vertical"
          requiredMark={false}
          scrollToFirstError
          onFinish={onFinish}
        >
          <br />
          <h2 className="text-2xl mb-5 font-semibold text-themeColor">Login</h2>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Username is required" }]}
          >
            <Input size="large" placeholder="Enter name" />
          </Form.Item>

          <Form.Item
            name="username"
            label="Username"
            tooltip="Username can have 4-50 characters containing alphabets, numbers and underscores"
            rules={[{ validator: handleLiveCheck }]}
          >
            <Input
              size="large"
              placeholder="Type your new username here..."
              onChange={handleLiveCheck}
              className="usernameInput"
              disabled={isSubmitting}
              addonAfter={
                unameStatus === "loading" || isSubmitting ? (
                  <FeatherIcon
                    icon="loader"
                    className="text-sky-500"
                    size={18}
                  />
                ) : unameStatus === "yes" ? (
                  <FeatherIcon
                    icon="check-circle"
                    className="text-green-500"
                    size={18}
                  />
                ) : unameStatus === "no" ? (
                  <FeatherIcon
                    icon="x-circle"
                    className="text-red-500"
                    size={18}
                  />
                ) : (
                  <></>
                )
              }
            />
          </Form.Item>
          <Row justify="space-between">
            <Form.Item name="degree" label="Degree">
              <Input
                size="large"
                placeholder="Enter your highest degree in medical field"
              />
            </Form.Item>
            <Form.Item name="specialization" label="Specialization">
              <Input
                size="large"
                placeholder="Enter your specialization in medical field"
              />
            </Form.Item>
          </Row>
          <Form.Item
            name="rate"
            label="Rate"
            tooltip="Min is INR 1 and max is INR 999"
          >
            <InputNumber
              style={{ width: "100%" }}
              addonBefore="INR"
              size="large"
              placeholder="Enter the rate/hour"
              min={1}
              max={999}
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" size="large" loading={isSubmitting}>
              Add Doctor
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </AdminLayout>
  );
};

export default AdminAddDoctor;
