/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import PostService from 'services/PostsService';
import * as S from './styles';

interface InitialValuesProps {
    id: string;
    style: string;
    image: string;
    title: string;
    text: string;
    link: string;
}

interface PostComponentProps {
    handleMenuClick: (key: string) => void;
    initialValues?: InitialValuesProps;
}

const CreateCouponComponent: React.FC<PostComponentProps> = ({
    handleMenuClick,
    initialValues
}) => {
    const [form] = Form.useForm();
    const [selectedValue, setSelectedValue] = React.useState(
        initialValues?.style !== undefined ? initialValues?.style : 'news'
    );

    const handleClick = (value: string) => {
        setSelectedValue(value);
    };

    const onFinish = async (values: any) => {
        if (initialValues !== undefined) {
            try {
                await PostService.updatePost(initialValues.id, {
                    title: values.title,
                    text: values.text,
                    link: values.link,
                    image: 'www.linkteste.com',
                    style: selectedValue
                });

                handleMenuClick('Posts');
            } catch (error) {
                console.log('error');
            }
        } else {
            try {
                const response = await PostService.CreatePost({
                    title: values.title,
                    text: values.text,
                    link: values.link,
                    image: 'www.linkteste.com',
                    style: selectedValue
                });
                console.log(response);
                handleMenuClick('Posts');
                return;
                handleClick(`none`);
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div style={{ height: '100%' }}>
            <h2>Adicionar Cupom</h2>
            <S.Container>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    style={{
                        backgroundColor: '#fcfcfc',
                        padding: '24px 0px',
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'start'
                    }}
                >
                    <S.Wrapper>
                        <Typography.Title
                            style={{ color: '#CC8D3E', fontSize: 18 }}
                            level={5}
                        >
                            Nome do Cupom:
                        </Typography.Title>
                        <Form.Item
                            name="title"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor, insira um título'
                                }
                            ]}
                            initialValue={initialValues?.title}
                        >
                            <Input
                                style={{
                                    borderRadius: 50,
                                    background: '#F8F9FA'
                                }}
                            />
                        </Form.Item>
                        <Typography.Title
                            style={{ color: '#CC8D3E', fontSize: 18 }}
                            level={5}
                        >
                            Tipo do Cupom:
                        </Typography.Title>
                        <Form.Item
                            name="couponType"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor, insira o tipo do cupom'
                                }
                            ]}
                            initialValue={initialValues?.title}
                        >
                            <Input
                                style={{
                                    borderRadius: 50,
                                    background: '#F8F9FA'
                                }}
                            />
                        </Form.Item>
                        <Typography.Title
                            style={{ color: '#CC8D3E', fontSize: 18 }}
                            level={5}
                        >
                            Recompensa do cupom:
                        </Typography.Title>
                        <Form.Item
                            name="reward"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Por favor, insira a recompensa do cupom'
                                }
                            ]}
                            initialValue={initialValues?.title}
                        >
                            <Input
                                style={{
                                    borderRadius: 50,
                                    background: '#F8F9FA'
                                }}
                            />
                        </Form.Item>
                        <Typography.Title
                            style={{ color: '#CC8D3E', fontSize: 18 }}
                            level={5}
                        >
                            Regras para resgate do cupom:
                        </Typography.Title>
                        <Form.Item
                            name="rules"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Por favor, insira as regras para resgate do cupom'
                                }
                            ]}
                            initialValue={initialValues?.title}
                        >
                            <Input
                                style={{
                                    borderRadius: 50,
                                    background: '#F8F9FA'
                                }}
                            />
                        </Form.Item>
                        <Typography.Title
                            style={{ color: '#CC8D3E', fontSize: 18 }}
                            level={5}
                        >
                            Validade do Cupom:
                        </Typography.Title>
                        <Form.Item
                            name="expirationDate"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        'Por favor, insira a data de validade do cupom'
                                }
                            ]}
                            initialValue={initialValues?.title}
                        >
                            <Input
                                style={{
                                    borderRadius: 50,
                                    background: '#F8F9FA'
                                }}
                            />
                        </Form.Item>
                    </S.Wrapper>
                    <S.ContentButtons>
                        <Button
                            style={{
                                color: '#000',
                                backgroundColor: '#F8F9FA',
                                fontWeight: 'bold',
                                fontSize: 18,
                                height: 48,
                                padding: '8px 24px'
                            }}
                        >
                            Cancelar
                        </Button>
                        <Button
                            type="primary"
                            htmlType="submit"
                            block
                            style={{
                                color: '#000',
                                backgroundColor: '#CC8D3E',
                                fontWeight: 'bold',
                                fontSize: 18,
                                height: 48,
                                padding: '8px 24px'
                            }}
                        >
                            Adicionar
                        </Button>
                    </S.ContentButtons>
                </Form>
            </S.Container>
        </div>
    );
};

export default CreateCouponComponent;
