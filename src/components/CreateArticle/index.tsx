import React, { useState, useEffect } from 'react';
import {
    Form,
    Input,
    Button,
    Card,
    Avatar,
    Tooltip,
    Row,
    Col,
    message,
    Select
} from 'antd';
import { UserOutlined, PlusCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import moment from 'moment';

interface Article {
    id: string;
    autorId: string;
    title: string;
    text: string;
    autorName: string;
    autorImg: string;
    dataCriacao?: string;
    categoria: string;
}

const CreateArticlePage: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get(
                    'https://dani.polijrinternal.com/artigos/readAll'
                );
                setArticles(response.data);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    message.error(`Erro ao buscar artigos: ${error.message}`);
                } else {
                    message.error('Erro ao buscar artigos.');
                }
                message.error('Erro ao buscar artigos.');
            }
        };
        fetchArticles();
    }, []);

    const onFinish = async (values: {
        title: string;
        text: string;
        autorImg?: string;
        categoria: string;
    }) => {
        setLoading(true);

        const newArticle: Article = {
            id: `${Date.now()}`, // or use UUID for unique key
            autorId: '181b02cc-df87-477d-8798-60892a58e809',
            title: values.title,
            text: values.text,
            autorName: 'Doutor',
            autorImg: values.autorImg || 'https://via.placeholder.com/150',
            dataCriacao: moment().format('DD/MM/YYYY HH:mm'),
            categoria: values.categoria
        };

        try {
            await axios.post(
                'https://dani.polijrinternal.com/artigos/create',
                newArticle
            );
            setArticles((prevArticles) => [...prevArticles, newArticle]);
            form.resetFields();
            message.success('Artigo criado com sucesso!');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                message.error(`Erro ao criar o artigo: ${error.message}`);
            } else {
                message.error('Erro ao criar o artigo. Tente novamente.');
            }
            message.error('Erro ao criar o artigo. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: 24, maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center' }}>Criar um novo artigo</h2>

            <Card
                title="Novo Artigo"
                style={{ marginBottom: 24 }}
                bordered={false}
                actions={[
                    <Button
                        type="primary"
                        icon={<PlusCircleOutlined />}
                        htmlType="submit"
                        form="articleForm"
                        loading={loading}
                    >
                        Criar Artigo
                    </Button>
                ]}
            >
                <Form
                    form={form}
                    layout="vertical"
                    id="articleForm"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="title"
                        label="Título do artigo"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor, insira o título do artigo'
                            }
                        ]}
                    >
                        <Input placeholder="Insira o título" />
                    </Form.Item>

                    <Form.Item
                        name="text"
                        label="Conteúdo do artigo"
                        rules={[
                            {
                                required: true,
                                message:
                                    'Por favor, insira o conteúdo do artigo'
                            }
                        ]}
                    >
                        <Input.TextArea
                            rows={4}
                            placeholder="Escreva o conteúdo do artigo"
                        />
                    </Form.Item>

                    <Form.Item name="autorImg" label="URL da imagem do autor">
                        <Input placeholder="Insira a URL da imagem do autor (opcional)" />
                    </Form.Item>

                    <Form.Item
                        name="categoria"
                        label="Categoria"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor, selecione uma categoria'
                            }
                        ]}
                    >
                        <Select placeholder="Selecione a categoria">
                            <Select.Option value="Artigo">Artigo</Select.Option>
                            <Select.Option value="Possibilidades">
                                Possibilidades
                            </Select.Option>
                            <Select.Option value="Guia">Guia</Select.Option>
                        </Select>
                    </Form.Item>
                </Form>
            </Card>

            <h3>Artigos Criados</h3>
            {articles.length === 0 ? (
                <p>Nenhum artigo foi criado ainda.</p>
            ) : (
                <Row gutter={[16, 16]}>
                    {articles.map((article) => (
                        <Col xs={24} sm={12} md={8} lg={6} key={article.id}>
                            <Card
                                hoverable
                                title={article.title}
                                extra={
                                    <Tooltip
                                        title={`Criado em ${
                                            article.dataCriacao ||
                                            'desconhecido'
                                        }`}
                                    >
                                        <Avatar
                                            src={article.autorImg}
                                            icon={<UserOutlined />}
                                        />
                                    </Tooltip>
                                }
                                style={{ marginTop: 16 }}
                            >
                                <Card.Meta
                                    avatar={<Avatar src={article.autorImg} />}
                                    title={article.autorName}
                                    description={<p>{article.text}</p>}
                                />
                                <div style={{ marginTop: 10 }}>
                                    <small>
                                        {article.dataCriacao &&
                                            `Publicado em: ${article.dataCriacao}`}
                                    </small>
                                    <br />
                                    <small>
                                        Categoria: {article.categoria}
                                    </small>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
};

export default CreateArticlePage;
