/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Table } from 'antd';
import { User } from 'interfaces/Auth';

function padToTwoDigits(number: number): string {
    return number.toString().padStart(2, '0');
}

function customFormatDate(dateString: string): string {
    const date = new Date(dateString);

    const day = padToTwoDigits(date.getDate());
    const month = padToTwoDigits(date.getMonth() + 1); // Os meses são baseados em zero
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}

export const getColumns = (
    handleGoTo: (post: User) => void,
    userType: string
) => [
    {
        title: 'Nome',
        dataIndex: 'name',
        key: 'name',
        render: (text: string, record: User) => (
            <a onClick={() => handleGoTo(record)} key={record.id}>
                {text}
            </a>
        )
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email'
    },
    {
        title: 'Peso (kg)',
        dataIndex: 'peso',
        key: 'peso'
    },
    {
        title: 'Altura (cm)',
        dataIndex: 'altura',
        key: 'altura'
    },
    {
        title: 'Idade',
        dataIndex: 'idade',
        key: 'idade'
    },
    {
        title: 'Ciclo Menstrual Data',
        dataIndex: 'ciclo_menstrual_data',
        key: 'ciclo_menstrual_data',
        render: (date: string) => customFormatDate(date)
    },
    {
        title: 'Ciclo Menstrual (dias)',
        dataIndex: 'ciclo_menstrual_dias',
        key: 'ciclo_menstrual_dias'
    },
    {
        title: 'Sexo',
        dataIndex: 'sexo',
        key: 'sexo'
    }
];

// Componente Tabela

interface TableProps {
    data: User[];
    handleGoTo: (user: User) => void;
}

const UserTable: React.FC<TableProps> = ({ data, handleGoTo }) => {
    const columns = getColumns(handleGoTo, 'user');

    return <Table dataSource={data} columns={columns} rowKey="id" />;
};

export default UserTable;
