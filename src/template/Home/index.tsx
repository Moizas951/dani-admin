/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import Loading from 'components/LoadingComponent';
import MenuAdmComponent from 'components/MenuAdmComponent';
import PostsComponent from 'components/PostsComponent';
import CompaniesComponent from 'components/CompaniesComponent';
import CreateCompanyComponent from 'components/CreateCompanyComponent';
import UsersComponent from 'components/UsersComponent';
import ShowUsersComponent from 'components/ShowUsersComponent';
import { parseCookies } from 'nookies';
import MenuCompanyComponent from 'components/MenuCompanyComponent';
import PlansComponent from 'components/PlansComponent';
import AnwserQuestion from 'components/CreatePostComponent';
import CreateArticlePage from 'components/CreateArticle';

const { Header, Sider, Content } = Layout;

const AdminDashboard: React.FC = () => {
    const [UserType, setUserType] = useState('');
    const [currentView, setCurrentView] = useState<
        | 'homeAdm'
        | 'homeCompany'
        | 'Posts'
        | 'PostCreate'
        | 'Companies'
        | 'CompanyCreate'
        | 'Answer'
        | 'Artigos'
        | 'Users'
        | 'ShowUsers'
        | 'Plans'
        | 'CupomCreate'
        | null
    >('homeAdm');

    useEffect(() => {
        const setType = () => {
            const cookies = parseCookies();
            const cookiestype = cookies['@app:userType'];
            setUserType(cookiestype);
            setCurrentView(cookiestype === 'adm' ? 'homeAdm' : 'homeCompany');
        };

        setType();
    }, []);
    const [viewValues, setViewValues] = useState<any>(undefined);
    const [loading, setLoading] = useState(false);

    const handleMenuClick = (key: string) => {
        setLoading(true);
        setViewValues(undefined);
        setCurrentView(
            key as
                | 'homeAdm'
                | 'homeCompany'
                | 'Posts'
                | 'PostCreate'
                | 'Companies'
                | 'CompanyCreate'
                | 'Answer'
                | 'Artigos'
                | 'Users'
                | 'Plans'
                | 'CupomCreate'
        );
        setLoading(false);
    };

    const handleViewWithValues = (key: string, values: any) => {
        setLoading(true);
        setViewValues(values);
        setCurrentView(
            key as
                | 'homeAdm'
                | 'homeCompany'
                | 'Posts'
                | 'PostCreate'
                | 'Companies'
                | 'CompanyCreate'
                | 'Answer'
                | 'Artigos'
                | 'Users'
                | 'ShowUsers'
                | 'Plans'
                | 'CupomCreate'
        );
        setLoading(false);
    };

    const renderComponent = () => {
        switch (currentView) {
            case 'homeAdm':
                return <MenuAdmComponent handleMenuClick={handleMenuClick} />;
            case 'homeCompany':
                return (
                    <MenuCompanyComponent handleMenuClick={handleMenuClick} />
                );
            case 'Posts':
                return (
                    <PostsComponent
                        handleMenuClick={handleMenuClick}
                        handleViewWithValues={handleViewWithValues}
                    />
                );
            case 'ShowUsers':
                return (
                    <ShowUsersComponent
                        handleMenuClick={handleMenuClick}
                        initialValues={viewValues}
                    />
                );
            case 'Companies':
                return (
                    <CompaniesComponent
                        handleMenuClick={handleMenuClick}
                        handleViewWithValues={handleViewWithValues}
                    />
                );
            case 'Users':
                return (
                    <UsersComponent
                        initialValues={{
                            UserType
                        }}
                        handleViewWithValues={handleViewWithValues}
                    />
                );
            case 'CompanyCreate':
                return (
                    <CreateCompanyComponent handleMenuClick={handleMenuClick} />
                );
            case 'Plans':
                return <PlansComponent handleMenuClick={handleMenuClick} />;
            case 'Artigos':
                return <CreateArticlePage initialValues={viewValues} />;
            case 'Answer':
                return <AnwserQuestion initialValues={viewValues} />;
            default:
                return <div>Página não encontrada</div>;
        }
    };

    return (
        <Layout style={{ height: '100vh' }}>
            <Sider style={{ background: '#FCFCFC' }}>
                <div
                    className="logo"
                    style={{
                        padding: '20px',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '18px',
                        background: '#8445BC'
                    }}
                >
                    App Dani
                </div>
                <Menu
                    onClick={() =>
                        handleMenuClick(
                            UserType === 'adm' ? 'homeAdm' : 'homeCompany'
                        )
                    }
                    style={{ background: '#F6F6F6' }}
                    mode="inline"
                >
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        Home
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                        background: '#8445BC'
                    }}
                />
                {loading ? (
                    <Loading />
                ) : (
                    <Content style={{ margin: '16px' }}>
                        {renderComponent()}
                    </Content>
                )}
            </Layout>
        </Layout>
    );
};

export default AdminDashboard;
