import React from 'react';
import { Button, Form, Input } from 'antd';
import styles from './index.module.scss';
const onFinish = (values: FieldType) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  code?: string;
};

const Login: React.FC = () => {
  return (
    <div className={styles.loginContainer}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ minWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label="验证码">
          <Form.Item
            name="code"
            rules={[{ required: true, message: '请输入验证码' }]}
            noStyle
          >
            <Input style={{ width: '55%' }} />
          </Form.Item>
          <Button className={styles.code}>获取验证码</Button>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button style={{ width: '100%' }} type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
