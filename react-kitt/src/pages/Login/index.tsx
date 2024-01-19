import React from 'react';
import { Button, Form, Input, message } from 'antd';
import { login } from '@/request/api';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.scss';
import { useDispatch } from 'react-redux';
type FieldType = {
  account?: string;
  password?: string;
};

const Login: React.FC = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const onFinish = async (values: FieldType) => {
    const res: UserObject = await login({
      account: values.account,
      password: values.password,
    }).finally(() => {
      console.log('finally');
    });
    if (res?.code === '1') {
      dispatch({
        type: 'SET_USER',
        payload: {
          token: res?.result.token,
          nickName: res?.result.nickname,
        },
      });
      navigator('/');
    } else {
      message.error(res?.message);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={styles.loginContainer}>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ minWidth: 600 }}
        initialValues={{ account: '12056258282', password: 'hm#qd@23!' }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="用户名"
          name="account"
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

        {/* <Form.Item label="验证码">
          <Form.Item
            name="code"
            rules={[{ required: true, message: '请输入验证码' }]}
            noStyle
          >
            <Input style={{ width: '55%' }} />
          </Form.Item>
          <Button onClick={getVerifyCode} className={styles.code}>
            获取验证码
          </Button>
        </Form.Item> */}

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
