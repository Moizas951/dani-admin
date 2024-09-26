/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Form, Input, Button, Typography, Flex } from 'antd';
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

const CreateCompanyComponent: React.FC<PostComponentProps> = ({
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
            <h2>Empresas</h2>
            <S.Container>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    style={{
                        backgroundColor: '#fcfcfc',
                        padding: 56,
                        height: '100%',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <S.Wrapper>
                        <Typography.Title level={5}>
                            Nome da Empresa
                        </Typography.Title>
                        <Form.Item
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor, insira um título'
                                }
                            ]}
                            initialValue={initialValues?.title}
                            style={{ marginBottom: 8 }}
                        >
                            <Input style={{ borderRadius: 50 }} />
                        </Form.Item>
                        <Typography.Title level={5}>
                            Ramo de Atuação
                        </Typography.Title>
                        <Form.Item
                            name="branch"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor, insira um texto'
                                }
                            ]}
                            initialValue={initialValues?.text}
                        >
                            <Input style={{ borderRadius: 50 }} />
                        </Form.Item>
                        <S.ContentImg style={{ marginBottom: 16 }}>
                            <S.BannerImg src="assets/images/photo-camera.png" />
                        </S.ContentImg>
                        <Typography.Title level={5}>Plano</Typography.Title>
                        <Form.Item
                            name="subscriptionPlan"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor, insira um link'
                                }
                            ]}
                            initialValue={initialValues?.link}
                        >
                            <Input style={{ borderRadius: 50 }} />
                        </Form.Item>
                    </S.Wrapper>
                    <S.Wrapper style={{ alignItems: 'center' }}>
                        <Flex vertical style={{ width: '100%' }}>
                            <Typography.Title level={5}>Rua</Typography.Title>
                            <Form.Item
                                name="street"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor, insira um texto'
                                    }
                                ]}
                                initialValue={initialValues?.text}
                                style={{ marginBottom: 8 }}
                            >
                                <Input
                                    style={{
                                        borderRadius: 50
                                    }}
                                />
                            </Form.Item>
                            <Typography.Title level={5}>
                                Número
                            </Typography.Title>
                            <Form.Item
                                name="numberHouse"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor, insira um texto'
                                    }
                                ]}
                                initialValue={initialValues?.text}
                                style={{ marginBottom: 8 }}
                            >
                                <Input
                                    style={{
                                        borderRadius: 50
                                    }}
                                />
                            </Form.Item>
                            <Typography.Title level={5}>
                                Bairro
                            </Typography.Title>
                            <Form.Item
                                name="neighborhood"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor, insira um texto'
                                    }
                                ]}
                                initialValue={initialValues?.text}
                                style={{ marginBottom: 8 }}
                            >
                                <Input style={{ borderRadius: 50 }} />
                            </Form.Item>
                            <Typography.Title level={5}>
                                Cidade
                            </Typography.Title>
                            <Form.Item
                                name="city"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor, insira um texto'
                                    }
                                ]}
                                initialValue={initialValues?.text}
                                style={{ marginBottom: 8 }}
                            >
                                <Input style={{ borderRadius: 50 }} />
                            </Form.Item>
                            <Typography.Title level={5}>
                                Estado
                            </Typography.Title>
                            <Form.Item
                                name="state"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor, insira um texto'
                                    }
                                ]}
                                initialValue={initialValues?.text}
                                style={{ marginBottom: 8 }}
                            >
                                <Input style={{ borderRadius: 50 }} />
                            </Form.Item>
                            <Typography.Title level={5}>CEP</Typography.Title>
                            <Form.Item
                                name="cep"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor, insira um texto'
                                    }
                                ]}
                                initialValue={initialValues?.text}
                                style={{ marginBottom: 8 }}
                            >
                                <Input style={{ borderRadius: 50 }} />
                            </Form.Item>
                            <Typography.Title level={5}>
                                Validade do Plano
                            </Typography.Title>
                            <Form.Item
                                name="text"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Por favor, insira um texto'
                                    }
                                ]}
                                initialValue={initialValues?.text}
                                style={{ marginBottom: 24 }}
                            >
                                <Input style={{ borderRadius: 50 }} />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    block
                                    style={{
                                        borderRadius: 50,
                                        backgroundColor: '#CC8D3E',
                                        borderColor: '#CC8D3E',
                                        fontWeight: 'bold',
                                        width: '100%'
                                    }}
                                >
                                    CONFIRMAR
                                </Button>
                            </Form.Item>
                        </Flex>
                    </S.Wrapper>
                </Form>
            </S.Container>
        </div>
    );
};

export default CreateCompanyComponent;
