import React, { useEffect, useState } from 'react';
import { Form, Input, Button } from 'antd';

const Test = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Giả sử API của bạn có endpoint là '/api/user'
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => {
        // Giả sử dữ liệu từ API trả về có dạng { username: 'JohnDoe', password: '123456' }
        const userData = { username: data.products[0].title, password: '123456' };

        // Thiết lập giá trị khởi tạo cho form
        form.setFieldsValue(userData);
      })
      .catch(error => {
        console.error('There was an error fetching the user data!', error);
        setLoading(false);
      });
  }, [form]);

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onValuesChange = (changedValues, allValues) => {
    console.log('Changed values:', changedValues);
    console.log('All values:', allValues);
  };

  return (
    <Form
      form={form}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onValuesChange={onValuesChange}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Test;
