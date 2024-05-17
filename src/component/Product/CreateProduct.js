import React, { useState } from "react";
import { Button, Form, Input, Alert } from "antd";
import { post } from "../../Api/handleApi";


function CreateProduct() {
  const [success, setSuccess] = useState(false);
  const [form] = Form.useForm(); // Sử dụng Form.useForm() để sử dụng form instance
  
  const onFinish = async (values) => {
    post(values)
      .then((data) => {
        console.log("Response:", data);
        setSuccess(true); // Set success state to true when successfully added
        setTimeout(() => {
          setSuccess(false); // Hide success message after 3 seconds
          form.resetFields(); // Reset form fields to initial values
          //Navigate('/');
        }, 3000);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      {success && (
        <Alert
          message="Successfully added product"
          type="success"
          showIcon
          style={{ marginBottom: "20px" }}
        />
      )}
      <Form
        form={form} // Gắn form instance với Form
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
        autoComplete="off"
      >
        <Form.Item
          label="name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default CreateProduct;
