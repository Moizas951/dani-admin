import React from 'react';
import { Card } from 'antd';

interface MenuComponentProps {
    handleMenuClick: (key: string) => void;
}

const MenuCompanyComponent: React.FC<MenuComponentProps> = ({
    handleMenuClick
}) => {
    return (
        <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
        >
            <h2>Menu Principal</h2>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    marginTop: '20px'
                }}
            >
                <Card
                    hoverable
                    style={{ width: 400, textAlign: 'center' }}
                    cover={
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <img
                                alt="icone para a aba de usuarios"
                                style={{
                                    width: 64,
                                    height: 64,
                                    margin: 16,
                                    color: '#8445BC'
                                }}
                                src="/assets/images/images.png"
                            />
                        </div>
                    }
                    onClick={() => handleMenuClick('Users')}
                >
                    <Card.Meta title="Usuários" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 400, textAlign: 'center' }}
                    cover={
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <img
                                alt="icone para a aba de usuarios"
                                style={{
                                    width: 64,
                                    height: 64,
                                    margin: 16,
                                    color: '#8445BC'
                                }}
                                src="assets/images/article-marketing-3-xxl.png"
                            />
                        </div>
                    }
                    onClick={() => handleMenuClick('Artigos')}
                >
                    <Card.Meta title="Artigos" />
                </Card>
                <Card
                    hoverable
                    style={{ width: 400, textAlign: 'center' }}
                    cover={
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <img
                                alt="icone para a aba de usuarios"
                                style={{
                                    width: 64,
                                    height: 64,
                                    margin: 16,
                                    color: '#8445BC'
                                }}
                                src="assets/images/5705044.png"
                            />
                        </div>
                    }
                    onClick={() => handleMenuClick('Answer')}
                >
                    <Card.Meta title="Perguntas" />
                </Card>
            </div>
        </div>
    );
};

export default MenuCompanyComponent;
