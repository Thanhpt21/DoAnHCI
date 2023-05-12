import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import "../frontend/css/Contact.css";
import contact from "../../assets/admin/assets/img/contact.jpg";

function Contact() {

    const onFinish = (values) => {
        console.log(values);
      };

      const layout = {
        labelCol: {
          span: 8,
        },
        wrapperCol: {
          span: 16,
        },
      };
      
      /* eslint-disable no-template-curly-in-string */
      const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!',
          number: '${label} is not a valid number!',
        },
        number: {
          range: '${label} must be between ${min} and ${max}',
        },
      };

    return  (
        <div className='row container_contact'>
            <div className='col-xs-12 col-sm-12 col-md-12' >
                <div>
                    <h3>Liên hệ</h3>
                </div>
                <div style={{backgroundColor: '#DFCCB3'}}>
                    <p style={{textAlign: 'center'}}>
                        <img src={contact} alt='' />
                    </p>
                </div>
            </div>
            <div className='col-xs-6 col-sm-12 col-md-6 '>
                <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    style={{
                    maxWidth: 600,
                    }}
                    validateMessages={validateMessages}
                >
                    <Form.Item
                    name={['user', 'name']}
                    label="Họ tên"
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                    >
                    <Input />
                    </Form.Item>
                    <Form.Item
                    name={['user', 'email']}
                    label="Email"
                    rules={[
                        {
                        type: 'email',
                        },
                    ]}
                    >
                    <Input />
                    </Form.Item>
                    <Form.Item
                    name={['user', 'phone']}
                    label="Phone"
                    >
                    <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'introduction']} label="Mô tả">
                    <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                    wrapperCol={{
                        ...layout.wrapperCol,
                        offset: 8,
                    }}
                    >
                    <Button type="primary" htmlType="submit">
                        Gửi đi
                    </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className='col-xs-6 col-sm-12 col-md-6 '>
                <h5>LIÊN HỆ NGAY ĐỂ NHẬN ƯU ĐÃI SỚM NHẤT.</h5>
                <div>
                <h6>Thời gian mở cửa</h6>
                <p>Từ thứ 2 đến thứ 7: 10 a.m - 8 p.m</p>
                <p>Chủ nhật: 10 a.m - 6 p.m</p>
                <h6>Hotline/Viber/Zalo</h6>
                <p><a href="callto:0935568120">0935568120</a></p>
                <h6>Email</h6>
                <p><a href="mailto:johnhenry@gmail.com">johnhenry@gmail.com</a></p>
                </div>
            </div>
        </div>
    )
}

export default Contact;
