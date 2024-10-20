import React from "react";
import { Card, Flex, Typography, Form, Input, Button, Alert, Spin } from "antd";
import { Link } from "react-router-dom";
// import registerImage from "../assets/register.jpg";
import registerImage from "../assets/loginlaptop.png";
import useSignup from "../hooks/useSignup";

const Register = () => {
  const { loading, error, registerUser } = useSignup();
  const handleRegistration = async (values) => {
    console.log(values);
    await registerUser(values);
  };
  return (
    <Card className="form-container">
      <Flex gap="large" align="center">
        {/* form */}
        <Flex vertical flex={1}>
          <Typography.Title level={3} strong className="title">
            Create an account
          </Typography.Title>
          <Typography.Text type="secondary" strong className="slogan">
            Join for exclusive access!
          </Typography.Text>
          <Form
            layout="vertical"
            onFinish={handleRegistration}
            autoComplete="off"
          >
            <Form.Item
              label="Full Name"
              name="name"
              rules={[
                {
                  required: "true",
                  message: "Please input your full name",
                },
              ]}
            >
              <Input placeholder="Enter Your Full Name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: "true",
                  message: "Please input your Email",
                },
                {
                  type: "email",
                  message: "Type input is not vailid Email",
                },
              ]}
            >
              <Input size="large" placeholder="Enter Your Email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: "true",
                  message: "Please input your password",
                },
              ]}
            >
              <Input.Password size="large" placeholder="Enter Your Password" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="passwordConfirm"
              rules={[
                {
                  required: "true",
                  message: "Please input your Confirm password",
                },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Re-Enter Your  Password"
              />
            </Form.Item>
            {error && (
              <Alert
                description={error}
                type="error"
                showIcon
                closable
                className="alert"
              />
            )}
            <Form.Item>
              <Button
                type={`${loading ? "" : "primary"}`}
                htmlType="submit"
                size="large"
                className="btn"
              >
                {loading ? <Spin /> : "Create Account"}
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/login">
                <Button size="large" className="btn">
                  Sign In
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Flex>
        {/* Image */}
        <Flex flex={1}>
          <img src={registerImage} className="auth-image" />
        </Flex>
      </Flex>
    </Card>
  );
};

export default Register;
