import { Button, Checkbox, Form, Input, message } from "antd";
import { AutoComplete, Cascader, Col, InputNumber, Row, Select } from "antd";
import Animate from "./Animation";
import "./RegisterPage.css";
import { userService } from "../../services/userService";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setUserLogin } from "../../toolkit/userSlice";
import { localUserService } from "../../services/localUserService";
import { useState } from "react";

const RegisterPage = () => {
  let navigate = useNavigate();

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    userService
      .postRegister(values)
      .then((res) => {
        message.success("Sign up success!");
        //  Chuyển hướng tới trang login
        navigate("/login");
      })
      .catch((err) => {
        message.error("Registration failed!");
      });
  };

  return (
    <div className="container">
      <div className="registerpage__content p-5 md:p-10 w-100 rounded bg-blue-800 flex-col-reverse md:flex-row flex justify-center items-center relative">
        <div className="w-full lg:w-1/2 z-20">
          <h2 className="text-2xl font-bold mb-4 text-center">REGISTER</h2>
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            style={{
              maxWidth: 500,
            }}
            scrollToFirstError
          >
            <Form.Item
              name="taiKhoan"
              label="Username"
              rules={[
                {
                  required: true,
                  message: "Please input your nickname!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="hoTen"
              label="Full name"
              rules={[
                {
                  required: true,
                  message: "Please input your nickname!",
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="matKhau"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="matKhau"
              label="Confirm Password"
              dependencies={["matKhau"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("matKhau") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="soDt"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
              <Button
                className="bg-white text-blue-800"
                type="primary"
                htmlType="submit"
              >
                Register
              </Button>
            </Form.Item>
          </Form>
          <p className="text-center text-sm sm:text-medium">
            Do you already have an account?{" "}
            <NavLink to="/login" className="underline hover:text-blue-100">
              Login
            </NavLink>
          </p>
        </div>
        <div className="z-50">
          <Animate />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
