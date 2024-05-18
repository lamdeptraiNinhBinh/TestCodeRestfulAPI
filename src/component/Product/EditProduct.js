import React, { useEffect, useState } from "react";
import { get, put } from "../../Api/handleApi";
import { useParams } from "react-router";
import { Button, Form, Input } from "antd";

function EditProduct() {
  const {id} = useParams();

  const [form] = Form.useForm();
  const [dataSuccess, setDataSuccess] = useState(false);
  // const [products, setProducts] = useState(
  //   {
  //     id: "",
  //     name: "",
  //     price: "",
  //   },
  // );

  useEffect(() => {
    fetch(`https://localhost:7257/Petrol/Petol/edit?${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const userData = data;

        // Thiết lập giá trị khởi tạo cho form
        form.setFieldsValue(userData);

        // setProducts(userData)
      })
      .catch(error => {
        console.error('There was an error fetching the user data!', error);
      });
  }, [form]);

  const onFinish = async (values) => {
    console.log(values)
    const response = await put(`https://localhost:7257/Petrol/Petol`, values);

    console.log(response)
    if(response) {
      setDataSuccess(true);
    }
  };
  
  // console.log(products)

  

  return (
    <>
      <Form
        form={form}
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
          <Input readOnly/>
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

      {dataSuccess ? (<div>Success</div>) : (<div></div>)}
    </>
  );
}

export default EditProduct;
