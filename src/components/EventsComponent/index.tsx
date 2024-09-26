/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Event } from 'interfaces/Events';
import EventService from 'services/EventService';
import { getColumns } from './index-helper';

interface EventComponentProps {
    handleMenuClick: (key: string) => void;
}

const EventsComponent: React.FC<EventComponentProps> = ({
    handleMenuClick
}) => {
    const [eventsList, setEventsList] = useState<Event[]>([]);

    useEffect(() => {
        const getEvents = async () => {
            try {
                const response = await EventService.GetAll();
                setEventsList(response);
            } catch (error) {
                console.error('Failed to fetch events:', error);
            }
        };

        getEvents();
    }, []);

    const handleEdit = (events: Event) => {
        console.log(events);
        // handleViewWithValues('PostCreate', {
        //     id: post.id,
        //     style: post.style,
        //     image: post.image,
        //     title: post.title,
        //     text: post.text,
        //     link: post.link
        // });
    };

    const handleDelete = async (id: string) => {
        try {
            await EventService.deleteEvent(id);
            const updatedEvents = await EventService.GetAll();
            setEventsList(updatedEvents);
        } catch (error) {
            console.error('Failed to delete event:', error);
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
                <h2>Eventos ativos</h2>
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
                dataSource={eventsList}
                rowKey="id"
            />
        </>
    );
};

export default EventsComponent;
