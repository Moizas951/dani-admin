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
    message
} from 'antd';
import { UserOutlined, PlusCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import moment from 'moment';

interface Article {
    autorId: string;
    title: string;
    text: string;
    autorName: string;
    autorImg: string;
    createdAt?: string;
}

const CreateArticlePage: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    // Função para buscar artigos ao carregar a página
    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get(
                    'https://dani.polijrinternal.com/artigos/readAll'
                ); // Fetch all articles
                setArticles(response.data);
            } catch (error) {
                console.error('Erro ao buscar artigos:', error);
            }
        };
        fetchArticles();
    }, []);

    // Função chamada ao submeter o formulário
    const onFinish = async (values: {
        title: string;
        text: string;
        autorImg?: string;
    }) => {
        setLoading(true);

        const newArticle: Article = {
            autorId: 'd9aa4869-9dbe-4fed-a548-be45d3c6b312',
            title: values.title,
            text: values.text,
            autorName: 'Doutor',
            autorImg: values.autorImg || 'https://via.placeholder.com/150',
            createdAt: moment().format('DD/MM/YYYY HH:mm')
        };

        try {
            await axios.post('/artigos/create', newArticle); // Send POST request to create a new article
            setArticles((prevArticles) => [...prevArticles, newArticle]); // Update articles state
            form.resetFields();
            message.success('Artigo criado com sucesso!');
        } catch (error) {
            console.error('Erro ao criar o artigo:', error);
            message.error('Erro ao criar o artigo. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: 24, maxWidth: 800, margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center' }}>Criar um novo artigo</h2>

            {/* Formulário para criar o artigo */}
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
                </Form>
            </Card>

            {/* Exibir artigos criados */}
            <h3>Artigos Criados</h3>
            {articles.length === 0 ? (
                <p>Nenhum artigo foi criado ainda.</p>
            ) : (
                <Row gutter={[16, 16]}>
                    {articles.map((article) => (
                        <Col span={24} key={article.autorId}>
                            <Card
                                hoverable
                                title={article.title}
                                extra={
                                    <Tooltip
                                        title={`Criado em ${
                                            article.createdAt || 'desconhecido'
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
                                        {article.createdAt &&
                                            `Publicado em: ${article.createdAt}`}
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
