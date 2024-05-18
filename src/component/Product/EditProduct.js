import React, { useEffect, useState } from "react";
import { get, put } from "../../Api/handleApi";
import { useParams } from "react-router";
import { Button, Form, Input } from "antd";

function EditProduct() {
  const {id} = useParams();

  const [form] = Form.useForm();
  const [products, setProducts] = useState(
    {
      id: "",
      name: "",
      price: "",
    },
  ]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await get(`${id}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchApi();
  }, []);

  const onFinish = async (values) => {
    put(`${id}`, values)
      .then((data) => {
        console.log("Response:", data);
        setSuccess(true); // Set success state to true when successfully added
        setTimeout(() => {
          setSuccess(false); // Hide success message after 3 seconds
          form.resetFields(); // Reset form fields to initial values
        }, 3000);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
  // console.log(products)

  

  return (
    <>
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

        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="id"
          name="id"
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
            Update
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default EditProduct;
