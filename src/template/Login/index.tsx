/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import router from 'next/router';
import { Form, Input, Button, Typography, message } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import UserService from 'services/UserService';
import * as S from './styles';

const Login = () => {
    const [messageApi, contextHolder] = message.useMessage();

    const onFinish = async (values: any) => {
        try {
            await UserService.login(values);
            router.push('/Home');
        } catch (error) {
            messageApi.open({
                type: 'error',
                content: 'Email ou senha incorretos'
            });
        }
    };

    return (
        <>
            {contextHolder}
            <S.Container>
                <S.LeftSide>
                    <S.Banner src="assets/images/flor-roxa-no-vaso-branco-pinterest.webp" />
                </S.LeftSide>
                <S.RightSide>
                    <Form
                        name="login"
                        onFinish={onFinish}
                        style={{ width: '400px' }}
                    >
                        <S.Banner src="assets/images/vecteezy_purple-flower-purple-flower-png-purple-flower-with_29139896.png" />
                        <S.FormTitle>Acesse sua conta</S.FormTitle>
                        <Typography.Title level={5}>E-mail</Typography.Title>
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor, insira seu e-mail!'
                                }
                            ]}
                        >
                            <Input
                                style={{ borderRadius: 50 }}
                                placeholder="E-mail"
                                type="email"
                            />
                        </Form.Item>
                        <Typography.Title level={5}>Senha</Typography.Title>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Por favor, insira sua senha!'
                                }
                            ]}
                        >
                            <Input.Password
                                style={{ borderRadius: 50 }}
                                placeholder="Senha"
                                iconRender={(visible) =>
                                    visible ? (
                                        <EyeTwoTone />
                                    ) : (
                                        <EyeInvisibleOutlined />
                                    )
                                }
                            />
                        </Form.Item>
                        <Form.Item>
                            <a
                                href="#"
                                style={{
                                    float: 'left',
                                    marginBottom: '10px',
                                    color: '#8445BC'
                                }}
                            >
                                Esqueci minha senha
                            </a>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                style={{
                                    borderRadius: 50,
                                    backgroundColor: '#8445BC',
                                    borderColor: '#8445BC'
                                }}
                            >
                                CONTINUAR
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <div style={{ textAlign: 'center' }}>
                                <span>Não tem uma conta? </span>
                                <a href="#" style={{ color: '#8445BC' }}>
                                    Cadastra-se
                                </a>
                            </div>
                        </Form.Item>
                    </Form>
                </S.RightSide>
            </S.Container>
        </>
    );
};

export default Login;
