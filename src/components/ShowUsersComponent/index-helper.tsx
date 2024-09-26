/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ColumnsType } from 'antd/es/table';

export const getColumns = (
    UserType: string
): ColumnsType<{
    key: string;
    discount: string;
    location: string;
    couponCode: string;
    redemptionDate: string;
}> => {
    const columns: ColumnsType<{
        key: string;
        discount: string;
        location: string;
        couponCode: string;
        redemptionDate: string;
    }> = [
        {
            title: 'Cupom Resgatado',
            dataIndex: 'discount',
            key: 'discount',
            render: (text: string) => <span>{text}</span>
        },
        {
            title: 'Código do cupom',
            dataIndex: 'couponCode',
            key: 'couponCode',
            render: (text: string) => <span>{text}</span>
        },
        {
            title: 'Data de resgate',
            dataIndex: 'redemptionDate',
            key: 'redemptionDate',
            render: (text: string) => <span>{text}</span>
        }
    ];

    // Adiciona a coluna 'Local' se o UserType for 'adm'
    if (UserType === 'adm') {
        columns.splice(1, 0, {
            // Inserindo a coluna na segunda posição
            title: 'Local',
            dataIndex: 'location',
            key: 'location',
            render: (text: string) => <span>{text}</span>
        });
    }

    return columns;
};
