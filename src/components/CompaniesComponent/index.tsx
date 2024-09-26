/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Company } from 'interfaces/Companies';
import CompanyService from 'services/CompanyService';
import { getColumns } from './index-helper';

interface CompanyComponentProps {
    handleMenuClick: (key: string) => void;
    handleViewWithValues: (key: string, values: any) => void;
}

const CompaniesComponent: React.FC<CompanyComponentProps> = ({
    handleMenuClick,
    handleViewWithValues
}) => {
    const [companiesList, setCompaniesList] = useState<Company[]>([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const response = await CompanyService.GetAll();
                setCompaniesList(response);
            } catch (error) {
                console.error('Failed to fetch modules:', error);
            }
        };

        getPosts();
    }, []);

    const handleEdit = (company: Company) => {
        handleViewWithValues('Coupons', company);
    };

    const handleDelete = async (id: string) => {
        try {
            await CompanyService.deleteCompany(id);
            const updatedCompanies = await CompanyService.GetAll();
            setCompaniesList(updatedCompanies);
        } catch (error) {
            console.error('Failed to delete post:', error);
        }
    };

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 8,
                    marginTop: 8,
                    marginRight: 16
                }}
            >
                <h2>Empresas</h2>
                <PlusOutlined
                    style={{
                        fontSize: '32px',
                        color: '#CC8D3E'
                    }}
                    onClick={() => handleMenuClick('CompanyCreate')}
                />
            </div>
            <Table
                style={{ color: 'white' }}
                columns={getColumns(handleEdit, handleDelete)}
                dataSource={companiesList}
                rowKey="id"
            />
        </>
    );
};

export default CompaniesComponent;
