/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { User } from 'interfaces/Auth';
import { Table } from 'antd';
import * as S from './styles';
import { getColumns } from './index-helper';

interface InitialValuesProps {
    User: User;
    UserType: string;
}

interface UsersComponentProps {
    handleMenuClick: (key: string) => void;
    initialValues: InitialValuesProps;
}

const ShowUsersComponent: React.FC<UsersComponentProps> = ({
    initialValues
}) => {
    const user = initialValues.User;

    const dataSource = [
        {
            key: '1',
            discount: '15% OFF',
            location: 'Restaurante Horto',
            couponCode: 'XXXXXXX',
            redemptionDate: '01/01/2024'
        },
        {
            key: '2',
            discount: '15% OFF',
            location: 'Restaurante Horto',
            couponCode: 'XXXXXXX',
            redemptionDate: '01/01/2024'
        },
        {
            key: '3',
            discount: '15% OFF',
            location: 'Restaurante Horto',
            couponCode: 'XXXXXXX',
            redemptionDate: '01/01/2024'
        },
        {
            key: '4',
            discount: '15% OFF',
            location: 'Restaurante Horto',
            couponCode: 'XXXXXXX',
            redemptionDate: '01/01/2024'
        }
    ];

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
                <h2>Informações do Cliente</h2>
            </div>
            <S.TablesContainer>
                <S.UserInfoContainer>
                    <S.Description>
                        <S.TitleContainer>
                            <S.Title>Nome:</S.Title>
                        </S.TitleContainer>
                        <span>{user.name}</span>
                    </S.Description>
                    <S.Description>
                        <S.TitleContainer>
                            <S.Title>Já utilizou cupons?</S.Title>
                        </S.TitleContainer>
                        <span>Sim</span>
                    </S.Description>
                    <S.Description>
                        <S.TitleContainer>
                            <S.Title>Última compra:</S.Title>
                        </S.TitleContainer>
                        <span>01/01/2024</span>
                    </S.Description>
                    <S.Description>
                        <S.TitleContainer>
                            <S.Title>Último acesso:</S.Title>
                        </S.TitleContainer>
                        <span>01/01/2024</span>
                    </S.Description>
                    <S.Description>
                        <S.TitleContainer>
                            <S.Title>CPF:</S.Title>
                        </S.TitleContainer>
                        <span>XXX.XXX.XXX-XX</span>
                    </S.Description>
                    <S.Description>
                        <S.TitleContainer>
                            <S.Title>Rua, número:</S.Title>
                        </S.TitleContainer>
                        <span>{`${user.address.street}, ${user.address.numberHouse}`}</span>
                    </S.Description>
                    <S.Description>
                        <S.TitleContainer>
                            <S.Title>Bairro:</S.Title>
                        </S.TitleContainer>
                        <span>{user.address.neighborhood}</span>
                    </S.Description>
                    <S.Description>
                        <S.TitleContainer>
                            <S.Title>Cidade:</S.Title>
                        </S.TitleContainer>
                        <span>{user.address.city}</span>
                    </S.Description>
                    <S.Description>
                        <S.TitleContainer>
                            <S.Title>Estado:</S.Title>
                        </S.TitleContainer>
                        <span>{user.address.state}</span>
                    </S.Description>
                    <S.Description>
                        <S.TitleContainer>
                            <S.Title>CEP:</S.Title>
                        </S.TitleContainer>
                        <span>{user.address.cep}</span>
                    </S.Description>
                    <S.Description>
                        <S.TitleContainer>
                            <S.Title>
                                {initialValues.UserType === 'adm'
                                    ? 'Preferências:'
                                    : 'Cliente Repetido?'}
                            </S.Title>
                        </S.TitleContainer>
                        <span>
                            {initialValues.UserType === 'adm'
                                ? 'Vestúario:'
                                : 'Não'}
                        </span>
                    </S.Description>
                </S.UserInfoContainer>
                <Table
                    style={{ color: '#FCFCFC', width: '80%' }}
                    columns={getColumns(initialValues.UserType)}
                    dataSource={dataSource}
                    rowKey="id"
                />
            </S.TablesContainer>
        </>
    );
};

export default ShowUsersComponent;
