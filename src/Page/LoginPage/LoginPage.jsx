import { Button, Checkbox, Form, Input, message } from "antd";
import Animate from "./Animation";
import "./loginPage.css";
import { userService } from "../../services/userService";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserLogin } from "../../toolkit/userSlice";
import { localUserService } from "../../services/localUserService";

const LoginPage = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  // Hàm onFinish của antd sử dụng để post dữ liệu từ api dùng để đăng nhập
  const onFinish = (values) => {
    console.log("Success:", values);
    userService
      .postLogin(values)
      .then((res) => {
        message.success("Login success!");
        // Lưu thông tin vào localStorage
        localUserService.set(res.data.content);
        // Dispatch actione lên reducer trong toolkit
        dispatch(setUserLogin(res.data.content));
        // Chuyển hướng tới homepage
        navigate("/");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        message.error("Login failed!");
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container">
      <div className="loginpage__content p-10 w-100 rounded bg-blue-800 flex justify-center items-center relative">
        <div className="w-1/2 z-50">
          <h2 className="text-2xl font-bold mb-4 text-center">LOGIN</h2>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="taiKhoan"
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </Form.Item>

            <Form.Item
              label="matKhau"
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <input
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              ></input>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                className="bg-white text-blue-800"
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="z-50">
          <Animate />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
