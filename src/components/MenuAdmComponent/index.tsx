import React from 'react';
import { Card } from 'antd';

interface MenuComponentProps {
    handleMenuClick: (key: string) => void;
}

const MenuAdmComponent: React.FC<MenuComponentProps> = ({
    handleMenuClick
}) => {
    return (
        <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
        >
            <h2>Área do Administrador</h2>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop: '20px'
                }}
            >
                <Card
                    hoverable
                    style={{ width: 300, textAlign: 'center' }}
                    cover={
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <img
                                alt="Icone para aba de clientes"
                                style={{
                                    width: 64,
                                    height: 64,
                                    margin: 16,
                                    color: '#c47f38'
                                }}
                                src="assets/icons/data_visualiation_graph.svg"
                            />
                        </div>
                    }
                    onClick={() => handleMenuClick('Users')}
                >
                    <Card.Meta title="Análise de Usuário" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 300, textAlign: 'center' }}
                    cover={
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <img
                                alt="Icone para aba de empresas"
                                style={{
                                    width: 64,
                                    height: 64,
                                    margin: 16,
                                    color: '#c47f38'
                                }}
                                src="assets/icons/management.svg"
                            />
                        </div>
                    }
                    onClick={() => handleMenuClick('Companies')}
                >
                    <Card.Meta title="Gerenciar Empresas" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 300, textAlign: 'center' }}
                    cover={
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <img
                                alt="Icone para a aba de eventos"
                                style={{
                                    width: 64,
                                    height: 64,
                                    margin: 16,
                                    color: '#c47f38'
                                }}
                                src="assets/icons/events.svg"
                            />
                        </div>
                    }
                    onClick={() => handleMenuClick('Events')}
                >
                    <Card.Meta title="Gerenciar Eventos" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 300, textAlign: 'center' }}
                    cover={
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <img
                                alt="icone para aba de posts"
                                style={{
                                    width: 64,
                                    height: 64,
                                    margin: 16,
                                    color: '#c47f38'
                                }}
                                src="assets/icons/Story.svg"
                            />
                        </div>
                    }
                    onClick={() => handleMenuClick('Posts')}
                >
                    <Card.Meta title="Gerenciar Posts" />
                </Card>
            </div>
        </div>
    );
};

export default MenuAdmComponent;
